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
      "Meta+ctrl+1",
      function() {
          position.positionWindow("ca.width", "ca.height / 3", "ca.x", "ca.y");
      });
    registerShortcut("Position window two tier top",
      "Position window two tier top",
      "Meta+ctrl+2",
      function() {
          position.positionWindow("ca.width", "ca.height * 2 / 3", "ca.x", "ca.y");
      });
    registerShortcut("Position window tier bottom",
      "Position window tier bottom",
      "Meta+ctrl+3",
      function() {
          position.positionWindow("ca.width", "ca.height / 3", "ca.x", "ca.y + ca.height * 2 / 3");
      });
    registerShortcut("Position window two tier bottom",
      "Position window two tier bottom",
      "Meta+ctrl+4",
      function() {
          position.positionWindow("ca.width", "ca.height * 2 / 3", "ca.x", "ca.y + ca.height / 3");
      });
    registerShortcut("Position window left large",
      "Position window left large",
      "Meta+ctrl+5",
      function() {
          position.positionWindow("1060", "ca.height", "ca.x", "ca.y");
      });
    registerShortcut("Position window right thin",
      "Position window right thin",
      "Meta+ctrl+6",
      function() {
          position.positionWindow("ca.width - 1060", "ca.height", "ca.x + 1060", "ca.y");
      });
    registerShortcut("Position window right thin top",
      "Position window right thin top",
      "Meta+ctrl+7",
      function() {
          position.positionWindow("ca.width - 1060", "ca.height / 2", "ca.x + 1060", "ca.y");
      });
    registerShortcut("Position window right thin bottom",
      "Position window tier right thin bottom",
      "Meta+ctrl+8",
      function() {
          position.positionWindow("ca.width - 1060", "ca.height / 2", "ca.x + 1060", "ca.y + ca.height / 2");
      });
  },

  init: function() {
    "use strict";
    this.registerShortcuts();
  }
}

position.init();
