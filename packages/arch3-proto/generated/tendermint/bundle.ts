/* eslint-disable */
import * as _47 from "./abci/types";
import * as _48 from "./crypto/keys";
import * as _49 from "./crypto/proof";
import * as _50 from "./libs/bits/types";
import * as _51 from "./p2p/types";
import * as _52 from "./types/block";
import * as _53 from "./types/evidence";
import * as _54 from "./types/params";
import * as _55 from "./types/types";
import * as _56 from "./types/validator";
import * as _57 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._47
  };
  export const crypto = {
    ..._48,
    ..._49
  };
  export namespace libs {
    export const bits = {
      ..._50
    };
  }
  export const p2p = {
    ..._51
  };
  export const types = {
    ..._52,
    ..._53,
    ..._54,
    ..._55,
    ..._56
  };
  export const version = {
    ..._57
  };
}