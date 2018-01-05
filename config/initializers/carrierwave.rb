# config/initializers/carrierwave.rb
CarrierWave.configure do |config|

  if Rails.env.development? || Rails.env.test?
    config.storage = :file
  else
    config.storage = :fog # Hvis det er produktion skal billedet gemmes på Amazon
    config.ignore_integrity_errors = true
    config.fog_provider = 'fog/aws'                        # required
    config.fog_public = true
    config.fog_credentials = {
      provider:              'AWS',                        # required
      aws_access_key_id:     ENV["AWS_ACCESS_KEY_ID"],        # required
      aws_secret_access_key: ENV["AWS_SECRET_ACCESS_KEY"],
      region: 'eu-west-2'       # required
    }
    config.fog_directory  = ENV["S3_BUCKET_NAME"]              # required
  end

end
