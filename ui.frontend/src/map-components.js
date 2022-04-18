import Text from './components/Text/Text'
import AppPage from './components/Page/AppPage'
import CheckBox from './components/Checkbox/Checkbox'
import Header from './components/Header/Header'
import Image from './components/Image/Image'
import Card from './components/Card/Card'
import Footer from './components/Footer/Footer'
import Margin from './components/Margin/Margin'
import BannerFigureLogin from './components/Login/BannerFigureLogin'
import LogoFigureLogin from './components/Login/LogoFigureLogin'
import CardLogin from './components/Login/CardLogin'
import FigureHome from './components/Home/FigureHome'
import FooterHome from './components/Home/FooterHome'
import HeaderHome from './components/Home/HeaderHome'

import {
  withComponentMappingContext,
  AllowedComponentsContainer,
  MapTo
} from '@mavice/aem-vue-editable-components'

MapTo('vue/components/page')(withComponentMappingContext(AppPage))

// Custom EditConfig for General New Vue Components
const EditConfig = {
  emptyLabel: 'Empty',

  isEmpty: function (props) {
    return !props
  }
}
/** *******************************************************************
              ↓  NEW COMPONENTS MAPPING COME HERE  ↓
**********************************************************************/

// Checkbox Component Mapping
MapTo('vue/components/checkbox')(CheckBox, EditConfig)

// Header Component Mapping
MapTo('vue/components/header')(Header, EditConfig)

// Image Component Mapping
MapTo('vue/components/image')(Image, {
  emptyLabel: 'Image',
  isEmpty: function (props) {
    return !props || !props.src || props.src.trim().length < 1
  },
  resourceType: 'vue/components/image'
})

// Text Component Mapping
MapTo('vue/components/text')(Text, {
  emptyLabel: 'Text',

  isEmpty: function (props) {
    return !props || !props.text || props.text.trim().length < 1
  }
})

MapTo('vue/components/card')(Card, EditConfig)
MapTo('vue/components/footer')(Footer, EditConfig)
MapTo('vue/components/margin')(Margin, EditConfig)

// Container Component Mapping
MapTo('vue/components/container')(
  withComponentMappingContext(AllowedComponentsContainer),
  {
    emptyLabel: 'Container',

    isEmpty: function (props) {
      return !props || !props.cqItemsOrder || props.cqItemsOrder.length === 0
    }
  }
)

MapTo('vue/components/login/banner')(BannerFigureLogin, {
  emptyLabel: 'Image',
  isEmpty: function (props) {
    return !props || !props.src || props.src.trim().length < 1
  },
  resourceType: 'vue/components/login/banner'
})
MapTo('vue/components/login/logo')(LogoFigureLogin, {
  emptyLabel: 'Image',
  isEmpty: function (props) {
    return !props || !props.src || props.src.trim().length < 1
  },
  resourceType: 'vue/components/login/logo'
})
MapTo('vue/components/login/card')(CardLogin, EditConfig)

MapTo('vue/components/home/figure')(FigureHome, {
  emptyLabel: 'Image',
  isEmpty: function (props) {
    return !props || !props.src || props.src.trim().length < 1
  },
  resourceType: 'vue/components/home/figure'
})
MapTo('vue/components/home/footer')(FooterHome, {
  emptyLabel: 'Image',
  isEmpty: function (props) {
    return !props || !props.src || props.src.trim().length < 1
  },
  resourceType: 'vue/components/home/footer'
})
MapTo('vue/components/home/header')(HeaderHome, {
  emptyLabel: 'Image',
  isEmpty: function (props) {
    return !props || !props.src || props.src.trim().length < 1
  },
  resourceType: 'vue/components/home/header'
})
