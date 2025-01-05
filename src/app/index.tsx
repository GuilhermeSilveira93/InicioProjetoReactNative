import React from 'react'

import Center from '@components/ui/Center'
import P from '@components/ui/P'
import { useSQLiteContext } from 'expo-sqlite'
import { drizzle } from 'drizzle-orm/expo-sqlite'
import * as DeviceSchema from '@/@database/schemas/product.schema'

export const Home = () => {
  const database = useSQLiteContext()
  const db = drizzle(database, {schema: DeviceSchema})
  const fetchDevices = async () => {
    const response = await db.query.ST_DISPOSITIVO.findMany()
    console.log(response)
    if (response.length === 0) {
      await db.insert(DeviceSchema.ST_DISPOSITIVO).values({
        ID_DISPOSITIVO: "1",
        S_CODIGO: "123456",
        S_NOME: "Dispositivo 1",
        S_DESCRICAO: "Dispositivo 1",
        S_UUID: "123456",
        S_STATUS: "S"
      }).then(res => console.log("res: ",res))
      
    }
  }
  fetchDevices()
  return (
    <Center>
      <P>Olá !</P>
      <P>Comece seu projeto comigo !</P>
    </Center>
  )
}
export default Home
