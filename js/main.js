$(document).ready(function() {

  var url = $("#videoModal iframe").attr("src");
  console.log(url);

  $("#trig").on("click", function() {
    $("#videoModal iframe").attr("src", url + "?rel=0&amp;autoplay=1");
  })

  $(".close").on("click", function() {
      setTimeout(ClearSrc, 500);
    })

  $("#videoModal").on("hidden.bs.modal", function() {
    setTimeout(ClearSrc, 300);
  })

  function ClearSrc() {
    $('#videoModal iframe').attr('src','');
  }
})
