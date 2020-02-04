(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{373:function(t,e,a){"use strict";a.r(e);var n=a(0),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"chapter-02-cc-contract-basics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chapter-02-cc-contract-basics"}},[t._v("#")]),t._v(" Chapter 02 - CC Contract Basics")]),t._v(" "),a("p",[t._v("Each CC contract has an eval code, this is just an arbitrary number that is associated with a specific CC contract. The details about a specific CC contract are all determined by the validation logic, that is ultimately what implements a CC contract.")]),t._v(" "),a("p",[t._v("However, unlike the normal bitcoin payments, where it is validated with only information in the transaction, a CC contract has the power to do pretty much anything. It has full access to the blockchain and even the mempool, though using mempool information is inherently more risky and needs to be done carefully or for exclusions, rather than inclusions.")]),t._v(" "),a("p",[t._v("However, this is the CC contract basics chapter, so let us ignore mempool issues and deal with just the basics. Fundamentally there is no structure for "),a("code",[t._v("OP_CHECKCRYPTOCONDITION")]),t._v(" serialized scripts, but if you are like me, you want to avoid having to read and understand a 1000 page IETF standard. What we really want to do is have a logical way to make a new contract and have it be able to be coded and debugged in an efficient way.")]),t._v(" "),a("p",[t._v("That means to just follow a known working template and only changing the things where the existing templates are not sufficient, ie. the core differentiator of your CC contract.")]),t._v(" "),a("p",[t._v("In the "),a("a",{attrs:{href:"https://github.com/jl777/komodo/tree/jl777/src/cc/eval.h",target:"_blank",rel:"noopener noreferrer"}},[t._v("~/komodo/src/cc/eval.h"),a("OutboundLink")],1),t._v(" file all the eval codes are defined, currently:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#define FOREACH_EVAL(EVAL)             \\")]),t._v("\n        EVAL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EVAL_IMPORTPAYOUT, 0xe1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        EVAL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EVAL_IMPORTCOIN,   0xe2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        EVAL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EVAL_ASSETS,   0xe3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        EVAL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EVAL_FAUCET, 0xe4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        EVAL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EVAL_REWARDS, 0xe5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        EVAL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EVAL_DICE, 0xe6"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        EVAL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EVAL_FSM, 0xe7"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        EVAL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EVAL_AUCTION, 0xe8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        EVAL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EVAL_LOTTO, 0xe9"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        EVAL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EVAL_HEIR, 0xea"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        EVAL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EVAL_CHANNELS, 0xeb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        EVAL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EVAL_ORACLES, 0xec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        EVAL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EVAL_PRICES, 0xed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        EVAL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EVAL_PEGS, 0xee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        EVAL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EVAL_TRIGGERS, 0xef"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        EVAL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EVAL_PAYMENTS, 0xf0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        EVAL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EVAL_GATEWAYS, 0xf1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v('Ultimately, we will probably end up with all 256 eval codes used, for now there is plenty of room. I imagined that similar to my coins repo, we can end up with a much larger than 256 number of CC contracts and you select the 256 that you want active for your blockchain. That does mean any specific chain will be limited to "only" having 256 contracts. Since there seems to be so few actually useful contracts so far, this limit seems to be sufficient. I am told that the evalcode can be of any length, but the current CC contracts assumes it is one byte.')]),t._v(" "),a("p",[t._v("The simplest CC script would be one that requires a signature from a pubkey along with a CC validation. This is the equivalent of the pay to pubkey bitcoin script and is what most of the initial CC contracts use. Only the channels one needed more than this and it will be explained in its chapter.")]),t._v(" "),a("p",[t._v("We end up with CC scripts of the form ("),a("code",[t._v("evalcode")]),t._v(") + ("),a("code",[t._v("pubkey")]),t._v(') + (other stuff), dont worry about the other stuff, it is automatically handled with some handy internal functions. The important thing to note is that each CC contract of this form needs a single pubkey and eval code and from that we get the CC script. Using the standard bitcoin\'s "hash and make an address from it" method, this means that the same pubkey will generate a different address for each different CC contract!')]),t._v(" "),a("p",[t._v("This is an important point, so I will say it in a different way. In bitcoin there used to be uncompressed pubkeys which had both the right and left half combined, into a giant 64 byte pubkey. But since you can derive one from the other, compressed pubkeys became the standard, that is why you have bitcoin pubkeys of 33 bytes instead of 65 bytes. There is a 02, 03 or 04 prefix, to mean odd or even or big pubkey. This means there are two different pubkeys for each privkey, the compressed and uncompressed. And in fact you can have two different bitcoin protocol addresses that are spendable by the same privkey. If you use some paper wallet generators, you might have noticed this.")]),t._v(" "),a("p",[t._v("CC contracts are like that, where each pubkey gets a different address for each evalcode. It is the same pubkey, just different address due to the actual script having a different evalcode, it ends up with a different hash and thus a different address. Now funds send to a specific CC address is only accessible by that CC contract and must follow the rules of that contract.")]),t._v(" "),a("p",[t._v('I also added another very useful feature where the convention is for each CC contract to have a special address that is known to all, including its private key. Before you panic about publishing the private key, remember that to spend a CC output, you need to properly sign it AND satisfy all the rules. By everyone having the privkey for the CC contract, everybody can do the "properly sign" part, but they still need to follow the rest of the rules.')]),t._v(" "),a("p",[t._v("From a user's perspective, there is the global CC address for a CC contract and some contracts also use the user pubkey's CC address. Having a pair of new addresses for each contract can get a bit confusing at first, but eventually we will get easy to use GUI that will make it all easy to use.")])])}),[],!1,null,null,null);e.default=s.exports}}]);