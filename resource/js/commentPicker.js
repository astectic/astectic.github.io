function bloggerComment() {
    var e = document.getElementById("comment-editor"),
        a = e.getAttribute("data-src");
    if (e.setAttribute("src", a), 1 == comment) {
        var n = document.getElementsByClassName("reply_to"),
            o = document.getElementById("threaded_review_form"),
            r = n.length,
            c = function(e, a, n, o) {
                e.addEventListener("click", function() {
                    var r = e.getAttribute("data-reply-to");
                    document.getElementById("c" + r).appendChild(a), document.getElementById("threaded_review_form").className = "review_replybox_single", n.src = o + "&parentID=" + r
                })
            };
        for (i = 0; i < r; i++) c(n[i], o, e, a);
        var s = document.getElementsByClassName("review_form")[0];
        document.getElementById("addcomment").addEventListener("click", function() {
            s.appendChild(o), document.getElementById("threaded_review_form").className = "review_replybox_thread", document.getElementById("addcomment").className = "hidden", e.src = a
        })
    }
}
var reviewButton = $(".review_button"),
    reviewForm = $(".review_form");
reviewButton.click(function() {
    $(this).remove(), reviewForm.removeClass("hidden"), bloggerComment()
});
function calculateRating() {
    var e = 0,
        a = 0;
    $(".review_holder > ol > li .review_text").each(function() {
        var n = $(this).find("em"),
            o = n.text(),
            r = parseInt(o);
        0 === o.length ? r = 5 : (r = parseInt(o), n.remove());
        var c = $(this).closest(".review_user");
        !isNaN(r) && (r > 5 && (r = 5), c.attr("data-star", r), e += r, a++)
    }), $(".total_number_reviews").each(function() {
        var e = parseInt($(this).closest("li").attr("class").split("_").pop()),
            a = 0;
        $(".review_user").each(function() {
            parseInt($(this).attr("data-star")) === e && a++
        }), $(this).text(a)
    });
    var n = a > 0 ? e / a : 5;
    $(".product_rating_score_count span:first-child").text(n.toFixed(1)), $(".progress_bar_1 i").css("width", 100 * getStarPercentage(1) + "%"), $(".progress_bar_2 i").css("width", 100 * getStarPercentage(2) + "%"), $(".progress_bar_3 i").css("width", 100 * getStarPercentage(3) + "%"), $(".progress_bar_4 i").css("width", 100 * getStarPercentage(4) + "%"), $(".progress_bar_5 i").css("width", 100 * getStarPercentage(5) + "%")
}
function getStarPercentage(e) {
    var a = 0;
    $(".review_text").each(function() {
        var n = $(this).closest(".review_user");
        parseInt(n.attr("data-star")) === e && a++
    });
    var n = $(".review_text").length;
    return n > 0 ? a / n : 0
}
function copyToClipboard(e) {
    var a = document.createElement("textarea");
    a.value = e, document.body.appendChild(a), a.select(), document.execCommand("copy"), document.body.removeChild(a)
}
calculateRating(), $(".review_form ul li").click(function() {
    $(".review_form ul li").removeClass("active"), $(this).addClass("active"), $(".review_form").addClass("selected");
    var e = $(this).attr("data-star"),
        a = 'The rating code is copied successfully, paste the code in the comment section.\nExample: "<em>' + e + '</em> Type a review message..."';
    alert(a), copyToClipboard("<em>" + e + "</em> ")
});
var reviewSortStarItems = $(".review_sort_star ul li");
reviewSortStarItems.click(function() {
    var e = "star_sorted_" + $(this).attr("class").slice(-1);
    $(this).hasClass("selected") ? ($(this).removeClass("selected"), $(".review_holder > ol").removeClass().addClass(e)) : (reviewSortStarItems.removeClass("selected"), $(this).addClass("selected"), $(".review_holder > ol").removeClass().addClass(e))
});
var reviewSortButton = $(".review_sort_button"),
    reviewSortButtonLabel = $(".review_sort_button span"),
    reviewSortOL = $(".review_sort_new_old_list ul"),
    reviewSortList = $(".review_sort_new_old_list ul li"),
    reviewSortListTop = $(".review_sort_new_old_list ul li:first-child"),
    reviewSortListNew = $(".review_sort_new_old_list ul li:last-child"),
    reviewSortListFirstText = reviewSortListTop.text(),
    reviewHolder = $(".review_holder");
reviewSortButtonLabel.text(reviewSortListFirstText), reviewSortButton.click(function() {
    reviewSortOL.toggleClass("hidden")
}), reviewSortList.click(function() {
    reviewSortList.removeClass("selected"), $(this).addClass("selected"), reviewSortOL.addClass("hidden");
    var e = $(this).text();
    reviewSortButtonLabel.text(e)
}), reviewSortListTop.click(function() {
    reviewHolder.removeClass("sort_by_newest")
}), reviewSortListNew.click(function() {
    reviewHolder.addClass("sort_by_newest")
}), $(document).on("click", function(e) {
    0 === $(e.target).closest(".review_sort_new_old_list").length && $(".review_sort_new_old_list ul").addClass("hidden")
})
