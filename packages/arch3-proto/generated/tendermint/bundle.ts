/* eslint-disable */
import * as _61 from "./abci/types";
import * as _62 from "./crypto/keys";
import * as _63 from "./crypto/proof";
import * as _64 from "./libs/bits/types";
import * as _65 from "./p2p/types";
import * as _66 from "./types/block";
import * as _67 from "./types/evidence";
import * as _68 from "./types/params";
import * as _69 from "./types/types";
import * as _70 from "./types/validator";
import * as _71 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._61
  };
  export const crypto = {
    ..._62,
    ..._63
  };
  export namespace libs {
    export const bits = {
      ..._64
    };
  }
  export const p2p = {
    ..._65
  };
  export const types = {
    ..._66,
    ..._67,
    ..._68,
    ..._69,
    ..._70
  };
  export const version = {
    ..._71
  };
}