$(function () {
   var e = window.location.href,
      t = $(".toplevel-thread>ol>li"),
      o = "",
      n = "",
      r = t.length,
      c = 0,
      a = 5;
   if ($(".comment a.comment-reply").click(function (e) {
         o = $("#comment-editor").attr("src"), $(".calcel-reply").remove(), $(".comment-actions").removeAttr("style"), $("#top-continue.continue").hide();
         var t = $(this);
         o = o + "&parentID=" + t.attr("data-comment-id"), n = t.parent().parent().parent().attr("id"), $("#comment-editor").attr("src", o), t.parent().hide(), $("#comment-editor").appendTo($("#" + n + ">.comment-replybox-single")), $("#" + n + ">.comment-replybox-single").append('<div class="calcel-reply"><button class="theme-button" type="button">Batalkan</button></div>'), $(".calcel-reply").click(function () {
            $(this).remove(), $(".comment-actions,#top-continue.continue").removeAttr("style"), $("#comment-editor").appendTo($(".comment-form"))
         })
      }), $("#top-continue.continue>a.comment-reply").click(function (e) {
         e.preventDefault(), $(this).parent().hide(), $(".calcel-reply").remove(), $(".comment-actions").removeAttr("style"), $("#comment-editor").appendTo($(this).parent().next()), $(".comment-replybox-thread").append('<div class="calcel-reply"><button class="theme-button" type="button">Batalkan</button></div>'), $(".calcel-reply").click(function () {
            $(this).remove(), $(".comment-actions,#top-continue.continue").removeAttr("style"), $("#comment-editor").appendTo($(".comment-form"))
         })
      }), -1 != e.indexOf("?showComment")) {
      if (-1 != e.indexOf("#c")) {
         var n = "#" + e.substring(e.indexOf("#c") + 1, e.length);
         if ((c = $(n).parents(".comment-thread").hasClass("thirdlevel-thread") ? $(n).parents("li").parents("li").index() : $(n).parents(".comment-thread").hasClass("secondlevel-thread") ? $(n).parents("li").index() : $(n).index()) >= 10)
            for (var m = 0; m < c + 1; m++) $(t[m]).removeClass("hidden");
         else
            for (var m = 0; m < 10; m++) $(t[m]).removeClass("hidden");
         c < r && $("#comments .loadmore").removeClass("hidden")
      } else {
         for (var m = 0; m < 10; m++) $(t[m]).removeClass("hidden");
         r > 10 && $("#comments .loadmore").removeClass("hidden")
      }
   } else {
      for (var m = 0; m < 10; m++) $(t[m]).removeClass("hidden");
      r > 10 && $("#comments .loadmore").removeClass("hidden")
   }
   $("#comments .loadmore>a").click(function () {
      if (c = r - (a = $(".toplevel-thread>ol>li.comment.hidden").length), 0 == a) $(this).parent().addClass("hidden");
      else
         for (var e = c; e < c + 10; e++) $(t[e]).removeClass("hidden")
   })
});
const img = /\b(http(?:s)?:\/\/\S+(?:png|jpe?g|gif|bmp|svg|tif)\S*)\b/gi,
   ytb = /(http:|https:)?\/\/(www\.)?(youtube.com|youtu.be)\/(watch)?(\?v=)?(\S+)?/gi;
for (var cmts = document.getElementsByClassName("comment-content"), i = 0; i < cmts.length; i++) {
   var e = cmts[i].innerHTML;
   if (img.test(e))
      for (var t = e.match(img), o = 0; o < t.length; o++) e = e.replace(t[o], "<img src='" + t[o] + "'/>");
   if (ytb.test(e))
      for (var n = e.match(ytb), r = 0; r < n.length; r++) e = e.replace(n[r], "<div class='embed'><iframe src='https://www.youtube.com/embed/" + n[r].split("=")[1] + "' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen=''></iframe></div>");
   cmts[i].innerHTML = e
}
$(document).ready(function () {
   $(".comment-form").append("<div class='commentForm'><iframe scrolling='no' allowtransparency='allowtransparency' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' id='comment-editor' name='comment-editor' src='' width='100%'></iframe></div>"), $.getScript("https://cdn.jsdelivr.net/gh/astectic/astectic.github.io@1e72e3c54e758aa769ca73f683c52442e3171607/resource/js/comment_iframe.js").done(function () {
      BLOG_CMT_createIframe("//www.blogger.com/rpc_relay.html")
   })
});
