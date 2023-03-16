import * as _95 from "./abci/types";
import * as _96 from "./crypto/keys";
import * as _97 from "./crypto/proof";
import * as _98 from "./libs/bits/types";
import * as _99 from "./p2p/types";
import * as _100 from "./types/block";
import * as _101 from "./types/evidence";
import * as _102 from "./types/params";
import * as _103 from "./types/types";
import * as _104 from "./types/validator";
import * as _105 from "./version/types";
export namespace tendermint {
  export const abci = { ..._95
  };
  export const crypto = { ..._96,
    ..._97
  };
  export namespace libs {
    export const bits = { ..._98
    };
  }
  export const p2p = { ..._99
  };
  export const types = { ..._100,
    ..._101,
    ..._102,
    ..._103,
    ..._104
  };
  export const version = { ..._105
  };
}