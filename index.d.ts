declare namespace index {
    interface ConnectionDetails {
        key_mgmt: string;
        ssid: string;
        username: string;
        password: string;
    }
    interface Options {
        iface: string;
        config: string;
        dns: string;
    }
    function check(ssid: string, cb: Function): void;
    function connect(ssid: string, password: string, callback: Function): void;
    function connectEAP(
        ssid: string,
        username: string,
        password: string,
        callback: Function
    ): void;
    function connectOpen(ssid: string, callback: Function): void;
    function connectTo(details: ConnectionDetails, callback: Function): any;
    function connectToId(networkId: number, callback: Function): any;
    function detectSupplicant(callback: Function): void;
    function disconnect(callback: Function): void;
    function interfaceDown(iface: string, callback: Function): void;
    function interfaceUp(iface: string, callback: Function): void;
    function killSupplicant(iface: string, callback: Function): void;
    function listInterfaces(callback: Function): void;
    function listNetworks(callback: Function): void;
    function restartInterface(iface: string, callback: Function): void;
    function scan(callback: Function): Array[object];
    function setCurrentInterface(iface: string, callback: Function): any;
    function startSupplicant(options: Options, callback: Function): void;
    function status(iface: string, cb: Function): void;
}
