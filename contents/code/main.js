/********************************************************************
Position Shortcut : position windows with shortcuts

Copyright (C) 2016 Daniel Sauvé <daniel@xn--sauv-epa.com>

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*********************************************************************/

var position = {

  positionWindow: function(w, h, x, y) {
    var c = workspace.activeClient;
    var ca = workspace.clientArea(null, c);
    var g = c.geometry;

    g.width = eval(w);
    g.height = eval(h);
    g.x = eval(x);
    g.y = eval(y);

    c.geometry = g;
  },

  registerShortcuts: function() {
    "use strict";
    registerShortcut("Position window tier top",
      "Position window tier top",
      "Meta+Shift+i",
      function() {
          position.positionWindow("ca.width", "ca.height / 3", "ca.x", "ca.y");
      });
  },

  init: function() {
    "use strict";
    this.registerShortcuts();
  }
}

position.init();
