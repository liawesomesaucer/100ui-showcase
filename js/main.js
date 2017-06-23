$(document).ready(function() {
  var tileBtnId = '#ui-view-tiles';
  var listBtnId = '#ui-view-list';
  var btnClass = '.ui-view--btn';

  var renderTiles = prepRenderTiles(generateUIList(), 3, tileBtnId, btnClass);
  var renderList = prepRenderTiles(generateUIList(), 1, listBtnId, btnClass);

  $(tileBtnId).click(renderTiles);
  $(listBtnId).click(renderList);

  // Change to renderList() if you want a default one-column layout
  renderTiles();

  $('#ui-num-days').text(NUM_UIS);
});

/**
 * Function that generates the list of names of files (uis) to show
 */
function generateUIList() {
  var res = [];

  var uiStr = '';
  for (var i = 0; i < NUM_UIS; i++) {
    // Implicit type conversion used to stringify numberk
    uiStr = (i + '0').substring(0,2).split('').reverse().join('') + '_' + IMAGE_NAME_SUFFIX + '.' + IMAGE_TYPE;
    res.push(uiStr);
  }

  return res;
}

/**
 * Function that returns a function that generates and renders all the image 
 * html content
 */
function prepRenderTiles(uiImageList, numColumns, btnId, btnClass) {
  var colWidth = 12 / numColumns;

  /**
   * Helper function to generate HTML for one tile
   */
  function generateTile(ui, i) {
    return '' +
      // (i+1) used due to zero-based indexing
      '<div class="ui-card--wrapper col-md-' + colWidth + '" id="' + (i+1) + '">' +
        '<div class="ui-card card">' +
          '<img class="ui-card--img card-img-top" src="images/uis/' + ui + '" />' +
          '<div class="ui-card--body card-body">' +
            '<p>Day ' + (i+1) + '</p>' +
          '</div>' +
        '</div>' +
      '</div>'; 
  }

  /**
   * Function that generates and renders all the image html content
   */
  return function() {
    var res = uiImageList.reduce(function(acc, ui, i) {
      return acc + generateTile(ui, i);
    }, '');

    $('#ui-content').html(res);
    $(btnClass).removeClass('active');
    $(btnId).addClass('active');
  }
}
