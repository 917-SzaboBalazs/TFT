---
---

$(document).ready(function(){

  $("#class-origins-section .adept").show();
  $("#class-origins-section .adept").addClass("active");
  $("#class-origins-section .synergy-icons #adept").addClass("active");

  {% for item in site.data.synergies %}
  $("#class-origins-section .synergy-icons #{{ item.name | split:' '}} ").click(function(){
    if (!$(this).hasClass("active")) {
      $("#class-origins-section .synergy-container .active").hide(300);
      $("#class-origins-section .active").removeClass("active");

      $("#class-origins-section .{{ item.name | split:' '}} ").show(300);
      $("#class-origins-section .{{ item.name | split:' '}} ").addClass("active");
      $(this).addClass("active");
    }
  });
  {% endfor %}

});
