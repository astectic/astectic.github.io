// Blogger Comments
$(function () {
   var url = window.location.href,
      str = $('.toplevel-thread>ol>li'),
      l = '',
      id = '',
      li = '',
      m = 4, // Jumlah komentar yang ditampilkan
      n = str.length,
      k = 0,
      p = 0
   // Memanggil iframe saat mengklik tombol balas
   $('.comment a.comment-reply').click(function (e) {
      l = $('#comment-editor').attr('src')
      $('.calcel-reply').remove()
      $('.comment-actions').removeAttr('style')
      $('#top-continue.continue').hide()
      var $this = $(this),
         id = $this.attr('data-comment-id')
      l = l + '&parentID=' + id
      li = $this.parent().parent().parent().attr('id')
      $('#comment-editor').attr('src', l)
      $this.parent().hide()
      $('#comment-editor').appendTo($('#' + li + '>.comment-replybox-single'))
      $('#' + li + '>.comment-replybox-single').append('<div class="calcel-reply"><button class="theme-button green" type="button">Batalkan</button></div>')
      $('.calcel-reply').click(function () {
         $(this).remove()
         $('.comment-actions,#top-continue.continue').removeAttr('style')
         $('#comment-editor').appendTo($('.comment-form'))
      })
   })
   // Memanggil iframe saat mengklik tombol tambahkan komentar bawah
   $('#top-continue.continue>a.comment-reply').click(function (e) {
      e.preventDefault()
      $(this).parent().hide()
      $('.calcel-reply').remove()
      $('.comment-actions').removeAttr('style')
      $('#comment-editor').appendTo($(this).parent().next())
      $('.comment-replybox-thread').append('<div class="calcel-reply"><button class="theme-button green" type="button">Batalkan</button></div>')
      $('.calcel-reply').click(function () {
         $(this).remove()
         $('.comment-actions,#top-continue.continue').removeAttr('style')
         $('#comment-editor').appendTo($('.comment-form'))
      })
   })
   // Memproses alamat browser jika ada tautan ke komentar
   if (url.indexOf('?showComment') != -1) {
      if (url.indexOf('#c') != -1) {
         var li = '#' + url.substring(url.indexOf('#c') + 1, url.length)
         if ($(li).parents('.comment-thread').hasClass('thirdlevel-thread')) {
            k = $(li).parents('li').parents('li').index()
         } else if ($(li).parents('.comment-thread').hasClass('secondlevel-thread')) {
            k = $(li).parents('li').index()
         } else {
            k = $(li).index()
         }
         if (k >= m) {
            for (var i = 0; i < k + 1; i++) {
               $(str[i]).removeClass('hidden')
            }
         } else {
            for (var i = 0; i < m; i++) {
               $(str[i]).removeClass('hidden')
            }
         }
         if (k < n) {
            $('#comments .loadmore').removeClass('hidden')
         }
      } else {
         for (var i = 0; i < m; i++) {
            $(str[i]).removeClass('hidden')
         }
         if (n > m) {
            $('#comments .loadmore').removeClass('hidden')
         }
      }
   } else {
      for (var i = 0; i < m; i++) {
         $(str[i]).removeClass('hidden')
      }
      if (n > m) {
         $('#comments .loadmore').removeClass('hidden')
      }
   }
   // Menampilkan lebih banyak komentar
   $('#comments .loadmore>a').click(function () {
      p = $('.toplevel-thread>ol>li.comment.hidden').length
      k = n - p
      if (p == 0) {
         $(this).parent().addClass('hidden')
      } else {
         for (var i = k; i < k + m; i++) {
            $(str[i]).removeClass('hidden')
         }
      }
   })
})
// Threaded Blogger Gambar Video
const img = /\b(http(?:s)?:\/\/\S+(?:png|jpe?g|gif|bmp|svg|tif)\S*)\b/gi,
   ytb = /(http:|https:)?\/\/(www\.)?(youtube.com|youtu.be)\/(watch)?(\?v=)?(\S+)?/gi;
for (var cmts = document.getElementsByClassName("comment-content"), i = 0; i < cmts.length; i++) {
   var a = cmts[i].innerHTML;
   if (img.test(a))
      for (var c = a.match(img), j = 0; j < c.length; j++) a = a.replace(c[j], "<img src='" + c[j] + "'/>");
   if (ytb.test(a))
      for (var d = a.match(ytb), k = 0; k < d.length; k++) a = a.replace(d[k], "<div class='embed'><iframe src='https://www.youtube.com/embed/" + d[k].split("=")[1] + "' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen=''></iframe></div>");
   cmts[i].innerHTML = a
}
// Lazy Comment Blogger
$(document).ready(function () {
   //$('.comment-form').addClass('spinner').addClass('load')
   $('.comment-form').append("<div class='commentForm'><iframe scrolling='no' allowtransparency='allowtransparency' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' id='comment-editor' name='comment-editor' src='' width='100%'></iframe></div>")
   $.getScript('https://cdn.jsdelivr.net/gh/astectic/astectic.github.io@1e72e3c54e758aa769ca73f683c52442e3171607/resource/js/comment_iframe.js').done(function () {
      BLOG_CMT_createIframe('//www.blogger.com/rpc_relay.html')
      //$('.comment-form').removeClass('spinner').removeClass('load')     
   })
})
