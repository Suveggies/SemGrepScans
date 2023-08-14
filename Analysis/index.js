import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import "./scss/style.scss";

UIkit.util.on("#search", "show", function (options) {
  options.target.focus();
});

UIkit.util.on("#search", "beforehide", function (options) {
  if (options.target.value) {
    jQuery(options.target).closest("form").submit();
    return false;
  }
});

UIkit.use(Icons);

function youtube_parser(url) {
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length == 11 ? match[7] : false;
}

UIkit.util.on(
  ".page-template-template-modal-youtube .uk-button-secondary",
  "click",
  function (e) {
    e.preventDefault();
    e.target.blur();
    //alert(this.href);
    var video_id = youtube_parser(this.href);
    UIkit.modal.dialog(
      '<div class="uk-modal-body"><figure class="wp-block-embed-youtube wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper"><iframe width="900" height="506" src="https://www.youtube.com/embed/' +
        video_id +
        '?feature=oembed&amp;modestbranding=1&amp;showinfo=0&amp;rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></figure></div>'
    );
  }
);

//click handler for album-trigger
jQuery(document).ready(function () {
  jQuery("#PricingTable thead th").not("[id*=p-1]").addClass("js-is-hidden");
  jQuery(".pricing-table_table-body td")
    .not("[headers*=p-1]")
    .addClass("js-is-hidden");
});
jQuery(".plan-tabs_tab").click(function () {
  //get the value of data-target-index
  var tid = jQuery(this).attr("data-target-index");

  //hide all album-list then show only the one's with data-album-id same as the clicked value
  var currentHeading = jQuery(
    '#PricingTable thead th[id*="p-' + tid + '"]'
  ).removeClass("js-is-hidden");
  var currentContent = jQuery(
    '.pricing-table_table-body td[headers*="p-' + tid + '"]'
  ).removeClass("js-is-hidden");

  jQuery("#PricingTable thead th").not(currentHeading).addClass("js-is-hidden");
  jQuery(".pricing-table_table-body td")
    .not(currentContent)
    .addClass("js-is-hidden");
});

// Customer Profiles - Load more functionality for list of breadth of integrations
jQuery(function () {
  // hide the Show Less button at first
  jQuery(".integration-trigger-less").hide();

  // Hide the Show More button if all list items are already visible
  if (
    jQuery(".integration li").length == jQuery(".integration li:visible").length
  ) {
    jQuery(".integration-trigger-more").hide();
  }

  // Show More click
  jQuery(".integration-trigger-more").click(function () {
    jQuery(".integration li:hidden")
      .slice(0, 1000)
      .slideDown("fast", function () {
        // Animation complete.
      });
    if (
      jQuery(".integration li").length ==
      jQuery(".integration li:visible").length
    ) {
      jQuery(".integration-trigger-more").hide();
      jQuery(".integration-trigger-less").show();
    }
  });

  // Show less click
  jQuery(".integration-trigger-less").click(function () {
    jQuery(".integration li:visible").slice(0, 5).show();
    jQuery(".integration li:visible")
      .slice(6, 1000)
      .slideUp("fast", function () {
        // Animation complete.
      });

    jQuery(".integration-trigger-more").show();
    jQuery(".integration-trigger-less").hide();
  });
});

// Cookie link in Footer
document
  .getElementsByClassName("cookie-footer-link")[0]
  .addEventListener("click", redoxOsano);

function redoxOsano(e) {
  Osano.cm.showDrawer("osano-cm-dom-info-dialog-open");
  e.preventDefault();
}

/* * * JS for Blocks - these eventually need to be separated into their own block-specific JS files for WP best practices * * */
