/* eslint-disable */
import * as _42 from "./applications/transfer/v1/genesis";
import * as _43 from "./applications/transfer/v1/query";
import * as _44 from "./applications/transfer/v1/transfer";
import * as _45 from "./applications/transfer/v1/tx";
import * as _46 from "./core/channel/v1/channel";
import * as _47 from "./core/channel/v1/genesis";
import * as _48 from "./core/channel/v1/query";
import * as _49 from "./core/channel/v1/tx";
import * as _50 from "./core/client/v1/client";
import * as _51 from "./core/client/v1/genesis";
import * as _52 from "./core/client/v1/query";
import * as _53 from "./core/client/v1/tx";
import * as _54 from "./core/commitment/v1/commitment";
import * as _55 from "./core/connection/v1/connection";
import * as _56 from "./core/connection/v1/genesis";
import * as _57 from "./core/connection/v1/query";
import * as _58 from "./core/connection/v1/tx";
import * as _59 from "./lightclients/localhost/v1/localhost";
import * as _60 from "./lightclients/solomachine/v1/solomachine";
import * as _61 from "./lightclients/tendermint/v1/tendermint";
import * as _86 from "./applications/transfer/v1/query.rpc.Query";
import * as _87 from "./core/channel/v1/query.rpc.Query";
import * as _88 from "./core/client/v1/query.rpc.Query";
import * as _89 from "./core/connection/v1/query.rpc.Query";
import * as _90 from "./applications/transfer/v1/tx.rpc.msg";
import * as _91 from "./core/channel/v1/tx.rpc.msg";
import * as _92 from "./core/client/v1/tx.rpc.msg";
import * as _93 from "./core/connection/v1/tx.rpc.msg";
import * as _98 from "./rpc.query";
import * as _99 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._42,
        ..._43,
        ..._44,
        ..._45,
        ..._86,
        ..._90
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._46,
        ..._47,
        ..._48,
        ..._49,
        ..._87,
        ..._91
      };
    }
    export namespace client {
      export const v1 = {
        ..._50,
        ..._51,
        ..._52,
        ..._53,
        ..._88,
        ..._92
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._54
      };
    }
    export namespace connection {
      export const v1 = {
        ..._55,
        ..._56,
        ..._57,
        ..._58,
        ..._89,
        ..._93
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._59
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._60
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._61
      };
    }
  }
  export const ClientFactory = {
    ..._98,
    ..._99
  };
}