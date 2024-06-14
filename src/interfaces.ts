
interface ISeed {
  author: string,
  id: number,
  text: string,
  title: string
  // TODO: add other fields once needed -- poem etc
}

interface IMashup {
  mashup: string,
  seeds: ISeed[]
}
export type {
  ISeed,
  IMashup
}