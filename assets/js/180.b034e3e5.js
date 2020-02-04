(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{415:function(e,t,s){"use strict";s.r(t);var a=s(0),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"setup-electrumx-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup-electrumx-server"}},[e._v("#")]),e._v(" Setup ElectrumX Server")]),e._v(" "),s("p",[e._v("Here are the steps required to run electrumx for KMD. Replace the variables according to your setup. You need to setup minimum 2 electrum servers for same coin to ensure stable operation.")]),e._v(" "),s("p",[e._v("Refer to the docs at "),s("a",{attrs:{href:"https://electrumx.readthedocs.io/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://electrumx.readthedocs.io/en/latest/"),s("OutboundLink")],1),e._v(" for more info.")]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("<username>")]),e._v(" is the username under which electrumx will run")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("$rpcuser")]),e._v(" and "),s("code",[e._v("$rpcpass")]),e._v(" are from the conf of the wallet daemon")])])]),e._v(" "),s("h2",{attrs:{id:"general-part"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#general-part"}},[e._v("#")]),e._v(" General part")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" python3-setuptools python3-multidict python3.6 python3.6-dev libleveldb-dev\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/kyuupichan/electrumx\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" electrumx\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" python3.6 setup.py "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n")])])]),s("h2",{attrs:{id:"coin-specific-part"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#coin-specific-part"}},[e._v("#")]),e._v(" Coin specific part")]),e._v(" "),s("p",[e._v("Run:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" contrib/systemd/electrumx.service /etc/systemd/system/electrumx_KMD.service\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("nano")]),e._v(" /etc/systemd/system/electrumx_KMD.service\n")])])]),s("p",[e._v("Fill the following contents into the file:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Description=Electrumx_KMD\nEnvironmentFile=/etc/electrumx_KMD.conf\nUser=<username>\n")])])]),s("p",[e._v("Run:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" -p /electrumdb/KMD\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("nano")]),e._v(" /etc/electrumx_KMD.conf\n")])])]),s("p",[e._v("Fill the following contents into the file:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("COIN = Komodo\nDB_DIRECTORY = /electrumdb/KMD\nDAEMON_URL = http://$rpcuser:$rpcpass@127.0.0.1:<port>/\nSERVICES = tcp://:10001,rpc://:8001\nEVENT_LOOP_POLICY = uvloop\nPEER_DISCOVERY = self\nINITIAL_CONCURRENT = 50\nCOST_SOFT_LIMIT = 10000\nCOST_HARD_LIMIT = 100000\nBANDWIDTH_UNIT_COST = 10000\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl start electrumx_KMD\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);