class WorksController < ApplicationController
  access all: [:show, :index], user: {except: [:destroy]}, site_admin: :all

  layout "works"  

  def index
    # @works = Category.first.works.order_by_position
    if params[:format] == "design"
      set_design_categories
      render 'categories/design_overview'
    else
      @category = Category.friendly.find(params[:format])
      @header_title = @category.name
      @works = @category.works.order_by_position 
    end
  end  

  def sort

    params[:order].each do |key, value|
      Work.find(value[:id]).update(position: value[:position])
    end 

    render nothing: true   

  end


  def new
    @work = Work.new()
    @categories = Category.all
  end

  def edit
    @work = Work.friendly.find(params[:id])
    @categories = Category.all

  end

  def update
    @work = Work.friendly.find(params[:id])
    if @work.update(work_params)

      flash[:success] = "Værket #{@work.name} er nu blevet opdateret."  
      redirect_to work_path(@work)
    else
      redirect_to kategori_oversigt_path(@work.category_id)
    end


  end
  
  def create

   @work = Work.new(work_params)
   @work.category_id = Category.find(1).id

   if @work.save

     flash[:succes] = "Dit værk #{@work.name} er nu blevet oprettet."
     redirect_to @work
   else
     redirect_to works_path
   end

 end

 def show 
   @work = Work.friendly.find(params[:id])
   unless @work.image_categories.first.images.empty?
    @image_categories = @work.image_categories.includes(:images).order("images.position ASC")
    @first_image_url = @image_categories.first.images.first.image
    render 'show'
  else 
      # For work without images
      render 'show_no_images'
    end 
  end

  def sort_images
    params[:order].each do |key, value|
      Image.find(value[:id]).update(position: value[:position])
    end
    render nothing: true
  end

  def destroy
   @work = Work.friendly.find(params[:id])
   work_category = @work.category_id
   work_name = Work.name
     if @work.destroy
      flash[:succes] = "#{work_name} er nu blevet slettet"
      redirect_to kategori_oversigt_path(work_category)
    end

  end

private

def set_design_categories
 @categories = []
 @categories << Category.find(13)
 @categories << Category.find(15)
 @categories << Category.find(18)
end

def prepare_save
 @work.image_categories.each do |img_cat| 
  img_cat.save
  binding.pry
  if images = Image.where(image_category_id: img_cat.id)
    img_cat.images << images
  end 
end
end

def work_params
 params.require(:work).permit(
  :name, 
  :sagsnr, 
  :category_id,
  :description, 
  :address,
  :competition,
  :opening_year,
  :overview_img,
  :position,
  {infos_attributes: 
    [:id, :work_id, :title, :_destroy]},
    {image_categories_attributes: 
      [:id, :work_id, :name, :_destroy,
        images_attributes: 
        [:id, :image, :photographer, :image_description, :_destroy]]}) 
end
end
