const scpClient = require("scp2");
const ora = require("ora");
const chalk = require("chalk");
const compressing = require("compressing");
const server = require("./pruducts");
const envStr =
  process.env.NODE_ENV === "prod"
    ? "生产"
    : process.env.NODE_ENV === "test"
    ? "测试"
    : "开发";
const spinner = ora("正在发布到" + envStr + "服务器...");
spinner.start();
scpClient.scp(
  "dist/",
  {
    host: server.host,
    port: server.port,
    username: server.username,
    password: server.password,
    path: server.path
  },
  function(err) {
    spinner.stop();
    if (err) {
      console.log(chalk.red("发布失败.\n"));
      return 
    } else {
      console.log(chalk.green("Success! 成功发布到" + envStr + "服务器! \n"));
    }
  }
);


function main(){
  try {
    compressing.zip.compressDir('./dist', './dist.zip')
      .then(() => {
          console.log('success');
          console.log(chalk.green("Success! 压缩完成! \n"));
      })
      .catch(err => {
          console.error(err);
          console.log(chalk.green("fail! 压缩失败! \n"));
      });
  } catch (error) {
    throw error
  }
}
main();
