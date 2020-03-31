// import _vendor from 'c4.vendor'

async function test () {
  console.log('test')
  return 1
}

async function main () {
  const value = await test()
  return value
}

export default {
  main,
}
