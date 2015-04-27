javascript: (function () {
  function numberFromPx(pxString) {
    return Number(pxString.replace('px', ''));
  }

  var detailEl = document.getElementById('ghx-detail-view');
  var headerEl = document.getElementById('ghx-column-header-group');
  var delta = 250;

  // increase detail width by delta
  var oldWidth = numberFromPx(detailEl.style['width']);
  detailEl.style['width'] = (oldWidth + delta) + 'px';

  // decrease header bar by delta
  oldWidth = numberFromPx(headerEl.style['width']);
  headerEl.style['width'] = (oldWidth - delta) + 'px';
 }());
