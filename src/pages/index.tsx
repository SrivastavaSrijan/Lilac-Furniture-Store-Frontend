import { Button, Stack } from '@mui/material';
import { Inter } from 'next/font/google';

import { SEO } from '@/components/common';
import { AppConfig } from '@/constants/constants';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Stack>
      <SEO title={AppConfig.pages.index.title} />
      Lorem ipsum dolor sit amet, aliqua occaecat occaecat nulla. Occaecat nisi
      ipsum esse ut velit consectetur. Nulla in sunt irure nisi reprehenderit do
      eiusmod par iatur esse aliqua. Esse Lorem reprehenderit aliqua officia
      elit ad veniam ad eni m. Aliqua quis ut minim velit. Ipsum aute fugiat
      fugiat qui eu et duis nisi aliq uip. Minim velit veniam sint in incididunt
      voluptate id est officia sunt exercit ation veniam. Mollit reprehenderit
      laboris irure consequat et aliqua incididunt mollit nulla labore in
      nostrud excepteur. Magna aute sint qui esse. Cillum cupid atat dolore ut
      nulla enim incididunt nulla fugiat nulla sint exercitation. Ad re
      prehenderit pariatur est quis ipsum quis cupidatat reprehenderit quis
      velit comm odo commodo sint et reprehenderit. Cillum do mollit in Lorem
      duis mollit aute. Q uis ipsum adipisicing sint qui officia proident Lorem
      magna sit. Culpa dolore ve niam dolore velit est ea. Proident ipsum
      laborum consectetur velit do laboris do lor voluptate sit cillum est et.
      Eiusmod proident ipsum et sit voluptate proiden t id ut minim exercitation
      et fugiat velit adipisicing incididunt nulla et adipi sicing. Dolore
      excepteur et in mollit deserunt labore culpa proident laboris mol lit
      consequat id officia nulla aliqua. Nulla reprehenderit mollit minim
      exercita tion laboris nostrud. Ea qui ullamco sit labore ea esse amet
      commodo dolore sunt elit cupidatat elit officia ipsum ex tempor.
      Incididunt pariatur sunt eiusmod n ostrud do ea esse reprehenderit
      proident fugiat excepteur amet aliqua tempor aut e consequat laboris dolor
      minim. Sunt minim ullamco adipisicing Lorem anim offic ia sunt incididunt
      aute sit consectetur duis fugiat ex fugiat. Esse laborum id a nim laborum
      adipisicing minim tempor laboris. Commodo magna Lorem excepteur comm odo
      et exercitation adipisicing deserunt excepteur ex. Labore irure
      consectetur duis minim excepteur exercitation cillum sunt ipsum mollit ex.
      Sint duis quis mo llit. Ullamco commodo voluptate mollit cupidatat
      consectetur labore consequat ei usmod dolore est cillum laborum. Eiusmod
      velit quis anim adipisicing culpa magna . Fugiat enim ullamco ipsum
      officia commodo pariatur duis do nulla. Velit ullamc o pariatur voluptate
      ea deserunt voluptate magna culpa labore consequat cillum u t ut.
      Incididunt id irure elit deserunt aliquip adipisicing ut dolore laboris el
      it ipsum aliquip esse Lorem deserunt non dolor. Nostrud sint quis pariatur
      in in exercitation irure aute sint ut est occaecat. Labore cupidatat est
      ea aliquip l aboris. Cillum irure sunt irure fugiat consequat do aliqua
      laboris ea fugiat ea pariatur ullamco minim ea. Qui ad culpa dolore dolor
      labore. Est dolore eu elit id incididunt aliquip. Fugiat cillum do veniam
      consequat pariatur aliqua aute ni si culpa ad eu sunt reprehenderit. Sunt
      magna non ullamco eu veniam sunt deserun t pariatur occaecat sint nisi. Ea
      quis non ex consectetur. Veniam dolor reprehen derit id ea excepteur duis
      dolore deserunt. Mollit labore eu sit Lorem aute dolo re anim commodo ex
      qui commodo magna excepteur commodo. Non et consequat mollit aliqua labore
      aute. Id sunt laborum ipsum velit mollit sint do amet. Occaecat ir ure
      nulla duis excepteur veniam nostrud. Adipisicing nulla et reprehenderit.
      Sun t occaecat sit consequat tempor. Commodo anim exercitation ex sit
      pariatur exerc itation labore laborum eiusmod ea enim excepteur do in
      Lorem tempor et Lorem. Fu giat exercitation deserunt in laborum labore
      labore. Laboris qui reprehenderit e xcepteur culpa nisi. Nostrud irure
      cillum tempor nostrud qui nostrud Lorem ex ve lit mollit sit nulla eu
      ipsum culpa incididunt anim. Ut sit magna pariatur cillu m esse ad id
      veniam mollit ipsum sit elit culpa.
      <Button variant="contained">Lorem Ipsum</Button>
    </Stack>
  );
}
