$(function(){
  $(".tab").find("li").on("click", function(){
    let $this = $(this);
    let $these = $this.closest(".tab").find("li")
    let index = $these.index($this)
    $these.removeClass("select");
    $this.addClass("select");
    $(".content").find("li").addClass("hide");
    $(".content").find("li").eq(index).removeClass("hide");
  });
});