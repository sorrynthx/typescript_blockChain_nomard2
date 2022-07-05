
interface Config {
    url: string;
}
// 타입스크립트에게 타입 알려줌
declare module "myPackage" {
    function init(config: Config): boolean;
    function exit(code: number): number;
}