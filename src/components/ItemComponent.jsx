import React, { useEffect, useState } from 'react'
import '../components/Item.css'

// icon_set1
import BegisticsIcon from './icon/BegisticsIcon'
import LitecoinIcon from './icon/LitecoinIcon'
import PulsChainIcon from './icon/PulsChainIcon'

// icon_set2
import ArbitrrumIcon from './icon/ArbitrrumIcon'
import FantomIcon from './icon/FantomIcon'
import ZksyncTokenIcon from './icon/ZksyncTokenIcon'

// icon_set3
import PolygonIcon from './icon/PolygonIcon'
import SeiIcon from './icon/SeiIcon'
import SolanaIcon from './icon/SolanaIcon'

// icon_set4
import BinanceIcon from './icon/BinanceIcon'
import EthereumIcon from './icon/EthereumIcon'
import OptimismIcon from './icon/OptimismIcon'

// icon_set5
import BinanceWalletIcon from './icon/BinanceWalletIcon'
import CoinBase from './icon/CoinBase'
import ShibariumTokenIcon from './icon/ShibariumTokenIcon'

function ItemComponent() {
  const [IconSet_1, setIcon_1] = useState(() => LitecoinIcon)
  const [IconSet_2, setIcon_2] = useState(() => ArbitrrumIcon)
  const [IconSet_3, setIcon_3] = useState(() => SeiIcon)
  const [IconSet_4, setIcon_4] = useState(() => OptimismIcon)
  const [IconSet_5, setIcon_5] = useState(() => ShibariumTokenIcon)

  const useIconSwitch = (setIcon, icons) => {
    useEffect(() => {
      const intervalId = setInterval(() => {
        setIcon(prevIcon => {
          const curr = icons.indexOf(prevIcon)
          const nextIndex = (curr + 1) % icons.length
          return icons[nextIndex]
        })
      }, 3000)
      return () => clearInterval(intervalId)
    }, [setIcon, icons])
  }

  useIconSwitch(setIcon_1, [LitecoinIcon, BegisticsIcon, PulsChainIcon])
  useIconSwitch(setIcon_2, [ArbitrrumIcon, ZksyncTokenIcon, FantomIcon])
  useIconSwitch(setIcon_3, [SeiIcon, PolygonIcon, SolanaIcon])
  useIconSwitch(setIcon_4, [OptimismIcon, EthereumIcon, BinanceIcon])
  useIconSwitch(setIcon_5, [ShibariumTokenIcon, BinanceWalletIcon, CoinBase])

  return (
    <>
      <div
        className={`cir position-1 backdrop-blur bg-white/10 z-10 backdrop-filter backdrop-blur-lg shadow-lg border border-2 `}
      >
        <IconSet_1 style={{ zIndex: 1000 }} className='icon' />
      </div>

      <div className='cir position-2 backdrop-blur bg-white/10 z-10 backdrop-filter backdrop-blur-lg shadow-lg border border-2'>
        <IconSet_2 style={{ zIndex: 1000 }} className='icon' />
      </div>

      <div className='cir position-3 backdrop-blur bg-white/10 z-10 backdrop-filter backdrop-blur-lg shadow-lg border border-2'>
        <IconSet_3 style={{ zIndex: 1000 }} className='icon' />
      </div>

      <div className='cir position-4 backdrop-blur bg-white/10 z-10 backdrop-filter backdrop-blur-lg shadow-lg border border-2'>
        <IconSet_4 style={{ zIndex: 1000 }} className='icon' />
      </div>

      <div className='cir position-5 backdrop-blur bg-white/10 z-10 backdrop-filter backdrop-blur-lg shadow-lg border border-2'>
        <IconSet_5 style={{ zIndex: 1000 }} className='icon' />
      </div>
    </>
  )
}

export default ItemComponent
