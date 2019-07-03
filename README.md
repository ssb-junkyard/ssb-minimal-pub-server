# ssb-minimal-pub-server

This is a friendly fork of
[ssb-server](https://github.com/ssbc/ssb-server) aimed at a minimal
core useful for pubs.

This repo has the following changes compared to ssb-server:
 - [ssb-links](https://github.com/ssbc/ssb-links) has been
   removed. This module not used in the core, instead mostly used by
   external applications usch as patchfoo, git-ssb and ssb-npm. If
   needed can be installed as a plugin.
 - Use [ssb-legacy-conn](https://github.com/staltz/ssb-legacy-conn)
   instead of [ssb-gossip](https://github.com/ssbc/ssb-gossip).
 - Includes all the modules needed for
   [peer-invites](https://github.com/ssbc/ssb-peer-invites).
   
In all other respects it behaves the same as ssb-server, so it should
be an easy replacement.

Furthermore this repo tries to stay as close to ssb-server as possible
by merging in changes when new releases appear. This means that 15.0.1
is the same as ssb-server 15.0.1 expect the changes mentioned above.

15.1.0 is a bit special in this regard because of the added peer
invites modules.

## Install

```
npm install -g ssb-minimal-pub-server
```

Upon installation it is recommended that you supply a [device
address](https://github.com/ssbc/ssb-device-address#usage) which
enables nodes to use your pub for peer-invites.

## Usage

Please refer to the [ssb-server documentation](https://github.com/ssbc/ssb-server#example-usage-bash).

# License

MIT
