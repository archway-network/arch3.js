/* eslint-disable */
import * as _27 from "./applications/transfer/v1/genesis";
import * as _28 from "./applications/transfer/v1/query";
import * as _29 from "./applications/transfer/v1/transfer";
import * as _30 from "./applications/transfer/v1/tx";
import * as _31 from "./core/channel/v1/channel";
import * as _32 from "./core/channel/v1/genesis";
import * as _33 from "./core/channel/v1/query";
import * as _34 from "./core/channel/v1/tx";
import * as _35 from "./core/client/v1/client";
import * as _36 from "./core/client/v1/genesis";
import * as _37 from "./core/client/v1/query";
import * as _38 from "./core/client/v1/tx";
import * as _39 from "./core/commitment/v1/commitment";
import * as _40 from "./core/connection/v1/connection";
import * as _41 from "./core/connection/v1/genesis";
import * as _42 from "./core/connection/v1/query";
import * as _43 from "./core/connection/v1/tx";
import * as _44 from "./lightclients/localhost/v1/localhost";
import * as _45 from "./lightclients/solomachine/v1/solomachine";
import * as _46 from "./lightclients/tendermint/v1/tendermint";
import * as _68 from "./applications/transfer/v1/tx.amino";
import * as _69 from "./core/channel/v1/tx.amino";
import * as _70 from "./core/client/v1/tx.amino";
import * as _71 from "./core/connection/v1/tx.amino";
import * as _72 from "./applications/transfer/v1/tx.registry";
import * as _73 from "./core/channel/v1/tx.registry";
import * as _74 from "./core/client/v1/tx.registry";
import * as _75 from "./core/connection/v1/tx.registry";
import * as _76 from "./applications/transfer/v1/query.rpc.Query";
import * as _77 from "./core/channel/v1/query.rpc.Query";
import * as _78 from "./core/client/v1/query.rpc.Query";
import * as _79 from "./core/connection/v1/query.rpc.Query";
import * as _80 from "./applications/transfer/v1/tx.rpc.msg";
import * as _81 from "./core/channel/v1/tx.rpc.msg";
import * as _82 from "./core/client/v1/tx.rpc.msg";
import * as _83 from "./core/connection/v1/tx.rpc.msg";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._27,
        ..._28,
        ..._29,
        ..._30,
        ..._68,
        ..._72,
        ..._76,
        ..._80
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._31,
        ..._32,
        ..._33,
        ..._34,
        ..._69,
        ..._73,
        ..._77,
        ..._81
      };
    }
    export namespace client {
      export const v1 = {
        ..._35,
        ..._36,
        ..._37,
        ..._38,
        ..._70,
        ..._74,
        ..._78,
        ..._82
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._39
      };
    }
    export namespace connection {
      export const v1 = {
        ..._40,
        ..._41,
        ..._42,
        ..._43,
        ..._71,
        ..._75,
        ..._79,
        ..._83
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._44
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._45
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._46
      };
    }
  }
}