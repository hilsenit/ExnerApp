ready = undefined
set_positions = undefined

set_positions = -> 
  $(".sortable-image-item").each (i) ->
    $(this).attr "data-pos", i + 1
    return

ready = ->
  set_positions()
  $(".sortable-images").sortable()
  $(".sortable-images").sortable().bind "sortupdate", (e, ui) ->
    updated_order = []
    set_positions() 
    $(".sortable-image-item").each (i) -> 
      updated_order.push
        id: $(this).data("id")
        position: i + 1
      return
    $.ajax
      type: "PUT"
      url: "/works/:id/sort_images"
      data: order: updated_order 
    return
  return


$(document).ready ready 