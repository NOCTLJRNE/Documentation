(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{445:function(e,o,t){"use strict";t.r(o);var r=t(0),a=Object(r.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"marketmakerv1-error-codes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#marketmakerv1-error-codes"}},[e._v("#")]),e._v(" MarketmakerV1 Error Codes")]),e._v(" "),t("p",[e._v("There are various errors codes a user could receive while using the marketmaker. This document intends to list each possible error along with a brief description of why a particular error may occur. Please send any critiques to @Alright on the "),t("a",{attrs:{href:"https://komodoplatform.com/discord",target:"_blank",rel:"noopener noreferrer"}},[e._v("Discord"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"alice-errors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alice-errors"}},[e._v("#")]),e._v(" Alice errors")]),e._v(" "),t("ul",[t("li",[t("code",[e._v('"error","only one pending request at a time"')]),e._v(" - You cannot create multiple simulaneous requests as alice.")]),e._v(" "),t("li",[t("code",[e._v('"error creating utxo→pair"')]),e._v(" - The order was matched. The UTXOs that were matched are no longer valid. This is likely due to a different wallet spending them after an order was matched.")]),e._v(" "),t("li",[e._v("-9998: "),t("code",[e._v('"time expired for Alice_request"')]),e._v(" – Alice made a request that was not filled. The order timed out.")]),e._v(" "),t("li",[e._v("-9999: "),t("code",[e._v('"uuid canceled"')]),e._v(" – Alice made an order. No Bob was willing to fill it. The order timed out.")]),e._v(" "),t("li",[t("code",[e._v('"error":"quote validation error"')]),e._v(" - The quote given by Bob is no longer valid.")]),e._v(" "),t("li",[t("code",[e._v('"reserved quote validate error {PRICE}"')]),e._v(" - The quote received by bob no longer matches the price he is requesting.")]),e._v(" "),t("li",[t("code",[e._v('"error":"invalid parameter"')]),e._v(" - Maxprice and relvolume must be >0.")]),e._v(" "),t("li",[t("code",[e._v('"LP_trades_alicevalidate {COIN} src {TXID} failed SPV check"')]),e._v(" - The UTXO you attempted to trade is not valid according to the SPV server. This is could be the result of a bad connection to the SPV server, a misconfigured SPV server or another wallet spending that UTXO.")]),e._v(" "),t("li",[t("code",[e._v('"quote {COIN}/{COIN} validate error {price}"')]),e._v(" - The quote you received after placing this order is no longer valid.")]),e._v(" "),t("li",[t("code",[e._v('"error":"base or rel not found or inactive"')]),e._v(" - One of the coins you are attempting to trade has not been activated.")]),e._v(" "),t("li",[t("code",[e._v('"error creating utxo→pair"')]),e._v(" - The order was matched. The UTXOs that were matched are no longer valid. This is likely doe to another wallet spending that UTXO.")]),e._v(" "),t("li",[t("code",[e._v('"error","only one pending request at a time"')]),e._v(" - You cannot create multiple simultaneous requests as alice.")]),e._v(" "),t("li",[t("code",[e._v('"error":"not enough utxo, please make more deposits"')]),e._v(" - You don't have the appropriate UTXOs for the trade you are attempting to make. You need UTXOs in a ratio of X:>(X/777). X is the amount you would like to trade.")]),e._v(" "),t("li",[t("code",[e._v('"error":"no orderbook entry found to handle request"')]),e._v(" - No Bob was willing to fill your request. If you do see Bobs in the orderbook, try different UTXOs sizes or a higher price.")]),e._v(" "),t("li",[t("code",[e._v('"error":"cant find a deposit that is close enough in size. make another deposit that is just a bit larger than what you want to trade"')]),e._v(" - You don't have the appropriate UTXOs for the trade you are attempting to make. If you do in fact have the UTXOs, it is possible they may be locked from previous failed swaps. Restart the marketmaker if so.")]),e._v(" "),t("li",[t("code",[e._v('"error":"cant find ETOMIC"')]),e._v(" - You need an equivalent amount of ETOMIC for any amount of ETH/ERC20 you attempt to trade. Use the BEER faucet on atomicexplorer.com. Trade BEER for ETOMIC.")]),e._v(" "),t("li",[t("code",[e._v('"blockinit.{COIN} {HEIGHT} error"')]),e._v(" - This is likely due to the coin's daemon not properly responding to the marketmaker. Restart the daemon of the coin.")])]),e._v(" "),t("h3",{attrs:{id:"the-1xxx-subset-of-error-codes-deal-with-a-swap-failing-at-some-point-while-trading-as-alice-these-can-be-caused-by-network-issues-or-a-misconfigured-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-1xxx-subset-of-error-codes-deal-with-a-swap-failing-at-some-point-while-trading-as-alice-these-can-be-caused-by-network-issues-or-a-misconfigured-node"}},[e._v("#")]),e._v(" The -1XXX subset of error codes deal with a swap failing at some point while trading as Alice. These can be caused by network issues or a misconfigured node.")]),e._v(" "),t("ul",[t("li",[e._v("-1000: "),t("code",[e._v("“error LP_sendwait pubkeys”")]),e._v(" - The swap was initiated between the two parties. Bob did not send his set of pubkeys.")]),e._v(" "),t("li",[e._v("-1001: "),t("code",[e._v('"error LP_sendwait choosei”')]),e._v(" - Bob sent his set of pubkeys. Your node chose one pubkey from this set and requested the privkeys for the remaining pubkeys. Bob did not respond.")]),e._v(" "),t("li",[e._v("-1002: "),t("code",[e._v('"error LP_sendwait mostprivs"')]),e._v(" - Your node chose a pubkey from Bob's set. Bob did not respond with the privkeys for the remaining pubkeys in the set.")]),e._v(" "),t("li",[e._v("-1003: "),t("code",[e._v('"basilisk_alicetxs error"')]),e._v(" – Your node failed to create the dex fee transaction.")]),e._v(" "),t("li",[e._v("-1004: "),t("code",[e._v('"error sending alicefee”')]),e._v(" - Swap failed at 1/7. Your node failed to send the dex fee.")]),e._v(" "),t("li",[e._v("-1005: "),t("code",[e._v('"error waiting for bobdeposit”')]),e._v(" - Swap failed at 2/7. Bob failed to send bobdeposit.")]),e._v(" "),t("li",[e._v("-1006: "),t("code",[e._v('"error sending alicepayment”')]),e._v(" - Swap failed at 3/7. Your node failed to send alicepayment.")]),e._v(" "),t("li",[e._v("-1007: "),t("code",[e._v('"error waiting for bobpayment”')]),e._v(" - Swap failed at 4/7. Bob failed to send bobpayment.")])]),e._v(" "),t("h3",{attrs:{id:"the-3xxx-subset-of-errors-deal-with-a-swap-not-being-able-to-start-while-trading-as-alice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-3xxx-subset-of-errors-deal-with-a-swap-not-being-able-to-start-while-trading-as-alice"}},[e._v("#")]),e._v(" The -3XXX subset of errors deal with a swap not being able to start while trading as Alice.")]),e._v(" "),t("ul",[t("li",[e._v("-3000: "),t("code",[e._v('"cant find coin.{COIN}"')]),e._v(" - The coin you attempted to trade is not activated on your node.")]),e._v(" "),t("li",[e._v("-3001: "),t("code",[e._v('"cant initialize swap”')]),e._v(" - Your node did not have enough available memory to start a swap.")]),e._v(" "),t("li",[e._v("-3002: "),t("code",[e._v('"error launching swaploop”')]),e._v(" - Your node was unable to start a new process to handle a new swap. Out of available processes.")]),e._v(" "),t("li",[e._v("-3003: "),t("code",[e._v('"couldnt bind to any port {PORT}"')]),e._v(" - Your node was unable to make a proper connection to Bob's node via nanomsg. This is likely caused by a firewall or issues with your nanomsg installation.")]),e._v(" "),t("li",[e._v("-3004: "),t("code",[e._v('"cant find privkey for {ADDRESS}"')]),e._v(" – Your node cannot find the privkey for the coin you’re attempting to trade.")])]),e._v(" "),t("h2",{attrs:{id:"bob-errors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bob-errors"}},[e._v("#")]),e._v(" Bob errors")]),e._v(" "),t("ul",[t("li",[t("code",[e._v('"error":"not enough utxo, please make more deposits"')]),e._v(" - You don't have the appropriate UTXOs for the trade you are attempting to make. You need UTXOs in a ratio of Y:(Y*>1.125). Y is the amount you would like to trade.")]),e._v(" "),t("li",[t("code",[e._v('"error creating utxo→pair"')]),e._v(" - The order was matched. The UTXOs that were matched are no longer valid. This is likely due to another wallet spending that UTXO.")]),e._v(" "),t("li",[t("code",[e._v('"error":"base or rel not found or inactive"')]),e._v(" - One of the coins you are attempting to trade has not been activated.")]),e._v(" "),t("li",[t("code",[e._v('"error":"GAME can only be alice coin"')]),e._v(" - GAME does not yet support BIP65. It can only be traded as Alice.")]),e._v(" "),t("li",[t("code",[e._v('"error":"cant find ETOMIC"')]),e._v(" - You need an equivalent amount of ETOMIC for any amount of ETH/ERC20 you attempt to trade. Use the BEER faucet on atomicexplorer.com. Trade that BEER for ETOMIC.")]),e._v(" "),t("li",[t("code",[e._v('"error":"invalid parameter"')]),e._v(" - maxprice and relvolume must be >0.")])]),e._v(" "),t("h3",{attrs:{id:"the-2xxx-subset-of-error-codes-deal-with-a-swap-failing-at-some-point-while-trading-as-bob-these-can-be-caused-by-network-issues-or-a-misconfigured-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-2xxx-subset-of-error-codes-deal-with-a-swap-failing-at-some-point-while-trading-as-bob-these-can-be-caused-by-network-issues-or-a-misconfigured-node"}},[e._v("#")]),e._v(" The -2XXX subset of error codes deal with a swap failing at some point while trading as Bob. These can be caused by network issues or a misconfigured node.")]),e._v(" "),t("ul",[t("li",[e._v("-2000: "),t("code",[e._v('"error waitsend pubkeys”')]),e._v(" - The swap was initiated between the two parties. Alice did not send her set of pubkeys.")]),e._v(" "),t("li",[e._v("-2001: "),t("code",[e._v('"error waitsend choosei”')]),e._v(" - Alice sent her set of pubkeys. Your node chose one pubkey from this set and requested the privkeys for the remaining pubkeys. Alice did not respond.")]),e._v(" "),t("li",[e._v("-2002: "),t("code",[e._v('"error waitsend mostprivs”')]),e._v("– Your node choose a pubkey from Alice's set. Alice did not respond with the privkeys for the remaining pubkeys in the set.")]),e._v(" "),t("li",[e._v("-2003: "),t("code",[e._v('"error bobscripts deposit”')]),e._v(" – Your node failed to create the bobdeposit transaction. This is the result of the UTXO being spent by a different wallet after the swap has been initiated.")]),e._v(" "),t("li",[e._v("-2004: "),t("code",[e._v('"error waiting for alicefee”')]),e._v(" - Swap failed at 1/7. Alice failed to send the dex fee.")]),e._v(" "),t("li",[e._v("-2005: "),t("code",[e._v('"error sending bobdeposit”')]),e._v(" - Swap failed at 2/7. Your node failed to send bobdeposit.")]),e._v(" "),t("li",[e._v("-2006: "),t("code",[e._v('"error waiting for alicepayment”')]),e._v(" - Swap failed at 3/7. Alice failed to send alicepayment.")]),e._v(" "),t("li",[e._v("-2007: "),t("code",[e._v('"error bobscripts payment”')]),e._v(" – Your node failed to create the bobpayment transaction. This is likely the result of the UTXO being spent by a different wallet after the swap has been initiated.")]),e._v(" "),t("li",[e._v("-2008: "),t("code",[e._v('"error sending bobpayment”')]),e._v(" - Swap failed at 4/7. Your node failed to send bobpayment.")])]),e._v(" "),t("h3",{attrs:{id:"the-4xxx-subset-of-errors-deal-with-a-swap-failing-to-start-while-trading-as-bob"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-4xxx-subset-of-errors-deal-with-a-swap-failing-to-start-while-trading-as-bob"}},[e._v("#")]),e._v(" The -4XXX subset of errors deal with a swap failing to start while trading as Bob")]),e._v(" "),t("ul",[t("li",[e._v("-4000: "),t("code",[e._v('"{"result","update stats"}')]),e._v(" - Your node received a request that was intended for a different node. This request is then relayed to other nodes.")]),e._v(" "),t("li",[e._v("-4002: "),t("code",[e._v('"error": “no price set"')]),e._v(" - You attempted to place an order without setting a price.")]),e._v(" "),t("li",[e._v("-4003: "),t("code",[e._v('"error":"cant get alicecoin"')]),e._v(" - Your node received an invalid request from alice. Your node does not have an active order for the coin Alice requested to trade. This is likely due to Alice having an outdated orderbook.")]),e._v(" "),t("li",[e._v("-4005: "),t("code",[e._v('"error","couldnt create pairsock"')]),e._v(" - Your node failed to make a proper connection with Alice's node via nanomsg. This is likely caused by a firewall or issues with your nanomsg installation. Use "),t("code",[e._v("canbind:0")]),e._v(" if your node is behind a firewall.")]),e._v(" "),t("li",[e._v("-4007: "),t("code",[e._v('"connect error {nanomsg error}"')]),e._v(" - Your node failed to make a proper connection with Bob's node via nanomsg. This is likely caused by a firewall or issues with your nanomsg installation.")]),e._v(" "),t("li",[e._v("-4008: "),t("code",[e._v('"no privkey found coin. {COIN} {address}"')]),e._v(" - Your node cannot find the privkey for the coin you’re attempting to trade.")])])])}),[],!1,null,null,null);o.default=a.exports}}]);