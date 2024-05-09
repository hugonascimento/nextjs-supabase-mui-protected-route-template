// External libraries
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
// Internal libraries/utilities
//
// Components
//
// Stylesheets
//

export default function TermsOfUse() {
    return (
        <>
            <Typography variant="h4">Terms of use</Typography>
            <Divider />
            <Typography variant="h6" sx={{ pt: 3, pb: 1 }}>
                What is Lorem Ipsum?
            </Typography>
            <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
            </Typography>
        </>
    )
}
