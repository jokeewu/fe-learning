//
// 给定一些打印任务，打印对应任务优先级
// 取出一个任务，与剩下任务最大优先级比较，如果剩下最大优先级大于取出任务优先级，则优先打印剩下最大优先级任务，将取出的任务放在队列末尾
//

function printTaskIndex(taskStr) {
  const tasks = taskStr.split(',').map(task => parseInt(task));
  const sortedTasks = [...tasks].sort((t1, t2) => t2 - t1);
  // 可能存在优先级相同
  
  // 不存在优先级相同
  return tasks.map(task => sortedTasks.findIndex(stask => stask === task)).join(',');
}

console.log(printTaskIndex('1,3,2')) // 2,0,1