# ssb-minimal-pub-server

This is a friendly fork of [ssb-server](https://github.com/ssbc/ssb-server) aimed at a minimal core useful for pubs.

This repo has the following changes compared to ssb-server:
 - [ssb-links](https://github.com/ssbc/ssb-links) has been
   removed. This module not used in the core, instead mostly used by
   external applications usch as patchfoo, git-ssb and ssb-npm. If
   needed can be installed as a plugin.
 - Use [ssb-legacy-conn](https://github.com/staltz/ssb-legacy-conn)
   instead of [ssb-gossip](https://github.com/ssbc/ssb-gossip).
   
In all other respects it behaves the same as ssb-server, so it should be an easy replacement.

## Install

```
npm install -g ssb-minimal-pub-server
```

## Usage

Please refer to the [ssb-server documentation](https://github.com/ssbc/ssb-server#example-usage-bash).

# License

MIT
