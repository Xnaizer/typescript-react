
import {type ReactNode } from "react"

// type InfoBoxProps = {
//     mode : 'hint' | 'warning';
//     severity?: 'low' | 'medium' | 'high';
//     // severity: 'low' | 'medium' | 'high' | undefined; // jika ga pake ?
//     children: ReactNode;
// }

type WarningBoxProps = {
    mode : 'warning';
    severity: 'low' | 'medium' | 'high';
    children: ReactNode;
}

type HintBoxProps = {
    mode : 'hint';
    children: ReactNode;
}

type InfoBoxProps = HintBoxProps | WarningBoxProps;

export default function InfoBox(
    // {mode,severity, children} : InfoBoxProps
    props: InfoBoxProps

) {
    const {children, mode} = props;
    if (mode === 'hint') {
        return (
            <aside className="infobox infobox-hint">
                <p>{children}</p>
            </aside>
         )
    }

    const { severity } = props; // ini bisa karna react ngerti klo ini bukan termasuk mode hint jadi karna di taruh dibawah fungsi diatas, jadi bisa digunakan, karna kalo ditaruh diatas severity akan digunakan di hint padahal engga.
    return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
        {/* {mode == 'warning' ? <h2>Warning</h2> : null}   */}
        <h2>Warning</h2> 
        <p>{children}</p>
    </aside>
    )
}