import landscapeStyles from './landscapeStyles';
import portraitStyles from './portraitStyles';




export default function responsiveStyles(screenInfo, w, h, isPortrait) {

    return isPortrait ? portraitStyles(w, h) : landscapeStyles(w, h)
}

