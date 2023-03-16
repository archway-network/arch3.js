import * as _74 from "./applications/transfer/v1/genesis";
import * as _75 from "./applications/transfer/v1/query";
import * as _76 from "./applications/transfer/v1/transfer";
import * as _77 from "./applications/transfer/v1/tx";
import * as _78 from "./core/channel/v1/channel";
import * as _79 from "./core/channel/v1/genesis";
import * as _80 from "./core/channel/v1/query";
import * as _81 from "./core/channel/v1/tx";
import * as _82 from "./core/client/v1/client";
import * as _83 from "./core/client/v1/genesis";
import * as _84 from "./core/client/v1/query";
import * as _85 from "./core/client/v1/tx";
import * as _86 from "./core/commitment/v1/commitment";
import * as _87 from "./core/connection/v1/connection";
import * as _88 from "./core/connection/v1/genesis";
import * as _89 from "./core/connection/v1/query";
import * as _90 from "./core/connection/v1/tx";
import * as _91 from "./core/types/v1/genesis";
import * as _92 from "./lightclients/localhost/v1/localhost";
import * as _93 from "./lightclients/solomachine/v1/solomachine";
import * as _94 from "./lightclients/tendermint/v1/tendermint";
import * as _129 from "./applications/transfer/v1/query.rpc.Query";
import * as _130 from "./core/channel/v1/query.rpc.Query";
import * as _131 from "./core/client/v1/query.rpc.Query";
import * as _132 from "./core/connection/v1/query.rpc.Query";
import * as _133 from "./applications/transfer/v1/tx.rpc.msg";
import * as _134 from "./core/channel/v1/tx.rpc.msg";
import * as _135 from "./core/client/v1/tx.rpc.msg";
import * as _136 from "./core/connection/v1/tx.rpc.msg";
import * as _141 from "./rpc.query";
import * as _142 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._74,
        ..._75,
        ..._76,
        ..._77,
        ..._129,
        ..._133
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._78,
        ..._79,
        ..._80,
        ..._81,
        ..._130,
        ..._134
      };
    }
    export namespace client {
      export const v1 = { ..._82,
        ..._83,
        ..._84,
        ..._85,
        ..._131,
        ..._135
      };
    }
    export namespace commitment {
      export const v1 = { ..._86
      };
    }
    export namespace connection {
      export const v1 = { ..._87,
        ..._88,
        ..._89,
        ..._90,
        ..._132,
        ..._136
      };
    }
    export namespace types {
      export const v1 = { ..._91
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._92
      };
    }
    export namespace solomachine {
      export const v1 = { ..._93
      };
    }
    export namespace tendermint {
      export const v1 = { ..._94
      };
    }
  }
  export const ClientFactory = { ..._141,
    ..._142
  };
}