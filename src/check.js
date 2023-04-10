console.log('check')

const check = async (...rest) => {
  return await Promise.resolve('check123');
}

check().then(console.log);
