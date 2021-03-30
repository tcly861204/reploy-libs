import React from 'react'
import Loadable from 'react-loadable'
export default function loadable (loader) {
  return Loadable({
    loader,
    loading() {
      return <div>正在加载</div>
    }
  })
}
