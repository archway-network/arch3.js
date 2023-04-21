/* eslint-disable */
import * as _62 from "./abci/types";
import * as _63 from "./crypto/keys";
import * as _64 from "./crypto/proof";
import * as _65 from "./libs/bits/types";
import * as _66 from "./p2p/types";
import * as _67 from "./types/block";
import * as _68 from "./types/evidence";
import * as _69 from "./types/params";
import * as _70 from "./types/types";
import * as _71 from "./types/validator";
import * as _72 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._62
  };
  export const crypto = {
    ..._63,
    ..._64
  };
  export namespace libs {
    export const bits = {
      ..._65
    };
  }
  export const p2p = {
    ..._66
  };
  export const types = {
    ..._67,
    ..._68,
    ..._69,
    ..._70,
    ..._71
  };
  export const version = {
    ..._72
  };
}