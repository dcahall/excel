console.log('check')

const check = async (...rest) => {
  await Promise.resolve('check123');
}

check();