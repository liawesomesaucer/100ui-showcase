$(document).ready(function() {
  var tileBtnId = '#ui-view-tiles';
  var listBtnId = '#ui-view-list';
  var btnClass = '.ui-view--btn';
  var uiList = generateUIList();

  var renderTiles = prepRenderTiles(uiList, 3, tileBtnId, btnClass);
  var renderList = prepRenderTiles(uiList, 1, listBtnId, btnClass);

  $(tileBtnId).click(renderTiles);
  $(listBtnId).click(renderList);

  // Change to renderList() if you want a default one-column layout
  renderTiles();

  // Text for 'And I’ve completed <NUM_UIS> days of the 100-day Daily UI Challenge'
  $('#ui-num-days').text(NUM_UIS);
});

/**
 * Function that generates the list of names of files (uis) to show
 */
function generateUIList() {
  var res = [];

  var uiStr = '';
  // Do 1 - 99 (one-based indexing)
  for (var i = 1; i < Math.min(NUM_UIS + 1, 99); i++) {
    // Implicit type conversion used to stringify numbers
    uiStr = generateUILink(i, IMAGE_NAME_SUFFIX, IMAGE_TYPE);
    res.push(uiStr);
  }

  // Do 100th if needed
  if (NUM_UIS === 100) {
    res.push('100_' + IMAGE_NAME_SUFFIX + '.' + IMAGE_TYPE);
  }

  return res;
}

/**
 * Helper function returning link of a UI based on index and config
 */
function generateUILink(i, imageNameSuffix, imageType) {
  return (i + '0').substring(0,2).split('').reverse().join('') +
    '_' + imageNameSuffix + '.' + imageType;
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
      '<div class="ui-card--wrapper col-md-' + colWidth + '" id="' + (i+1) + '">' +
        '<div class="ui-card card">' +
          '<div class="ui-card--img-wrapper">' +
            '<img class="ui-card--img card-img-top" src="images/uis/' + ui + '" />' +
          '</div>' +
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
