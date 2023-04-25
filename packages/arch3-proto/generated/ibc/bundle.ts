/* eslint-disable */
import * as _41 from "./applications/transfer/v1/genesis";
import * as _42 from "./applications/transfer/v1/query";
import * as _43 from "./applications/transfer/v1/transfer";
import * as _44 from "./applications/transfer/v1/tx";
import * as _45 from "./core/channel/v1/channel";
import * as _46 from "./core/channel/v1/genesis";
import * as _47 from "./core/channel/v1/query";
import * as _48 from "./core/channel/v1/tx";
import * as _49 from "./core/client/v1/client";
import * as _50 from "./core/client/v1/genesis";
import * as _51 from "./core/client/v1/query";
import * as _52 from "./core/client/v1/tx";
import * as _53 from "./core/commitment/v1/commitment";
import * as _54 from "./core/connection/v1/connection";
import * as _55 from "./core/connection/v1/genesis";
import * as _56 from "./core/connection/v1/query";
import * as _57 from "./core/connection/v1/tx";
import * as _58 from "./lightclients/localhost/v1/localhost";
import * as _59 from "./lightclients/solomachine/v1/solomachine";
import * as _60 from "./lightclients/tendermint/v1/tendermint";
import * as _85 from "./applications/transfer/v1/query.rpc.Query";
import * as _86 from "./core/channel/v1/query.rpc.Query";
import * as _87 from "./core/client/v1/query.rpc.Query";
import * as _88 from "./core/connection/v1/query.rpc.Query";
import * as _89 from "./applications/transfer/v1/tx.rpc.msg";
import * as _90 from "./core/channel/v1/tx.rpc.msg";
import * as _91 from "./core/client/v1/tx.rpc.msg";
import * as _92 from "./core/connection/v1/tx.rpc.msg";
import * as _97 from "./rpc.query";
import * as _98 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._41,
        ..._42,
        ..._43,
        ..._44,
        ..._85,
        ..._89
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._45,
        ..._46,
        ..._47,
        ..._48,
        ..._86,
        ..._90
      };
    }
    export namespace client {
      export const v1 = {
        ..._49,
        ..._50,
        ..._51,
        ..._52,
        ..._87,
        ..._91
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._53
      };
    }
    export namespace connection {
      export const v1 = {
        ..._54,
        ..._55,
        ..._56,
        ..._57,
        ..._88,
        ..._92
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._58
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._59
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._60
      };
    }
  }
  export const ClientFactory = {
    ..._97,
    ..._98
  };
}