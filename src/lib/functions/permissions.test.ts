import { PermissionsAndroid, Alert } from 'react-native'

import { requestPermissions } from './permissions'

jest.mock('react-native', () => ({
  PermissionsAndroid: {
    request: jest.fn(),
    PERMISSIONS: {
      ACCESS_FINE_LOCATION: 'ACCESS_FINE_LOCATION',
      BLUETOOTH_SCAN: 'BLUETOOTH_SCAN',
      BLUETOOTH_CONNECT: 'BLUETOOTH_CONNECT',
      BLUETOOTH_ADVERTISE: 'BLUETOOTH_ADVERTISE',
      READ_EXTERNAL_STORAGE: 'READ_EXTERNAL_STORAGE',
    },
    RESULTS: {
      GRANTED: 'granted',
      DENIED: 'denied',
    },
  },
  Alert: {
    alert: jest.fn(),
  },
}))

describe('teste função requestPermissions', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('solicita todas as permissões quando localização é concedida', async () => {
    // Primeira permissão (localização) concedida
    ;(PermissionsAndroid.request as jest.Mock).mockResolvedValue('granted')

    await requestPermissions()

    // Espera que as permissões tenham sido solicitadas 5 vezes
    expect(PermissionsAndroid.request).toHaveBeenCalledTimes(5)

    expect(PermissionsAndroid.request).toHaveBeenNthCalledWith(
      1,
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      expect.any(Object)
    )

    expect(PermissionsAndroid.request).toHaveBeenNthCalledWith(
      2,
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
      expect.any(Object)
    )

    expect(PermissionsAndroid.request).toHaveBeenNthCalledWith(
      3,
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
      expect.any(Object)
    )

    expect(PermissionsAndroid.request).toHaveBeenNthCalledWith(
      4,
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_ADVERTISE,
      expect.any(Object)
    )

    expect(PermissionsAndroid.request).toHaveBeenNthCalledWith(
      5,
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      expect.any(Object)
    )

    expect(Alert.alert).not.toHaveBeenCalled()
  })

  it('mostra alerta quando permissão de localização é negada', async () => {
    ;(PermissionsAndroid.request as jest.Mock).mockResolvedValueOnce('denied')

    await requestPermissions()

    expect(PermissionsAndroid.request).toHaveBeenCalledTimes(1)

    expect(Alert.alert).toHaveBeenCalledWith(
      'Atenção',
      'Permissão de localização necessária para o Bluetooth não concedida'
    )
  })
})
