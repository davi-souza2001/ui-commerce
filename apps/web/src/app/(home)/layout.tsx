import { Header } from '@/components'
import { Footer } from '@/components/Footer'
import { ProductProvider } from '@/service/context/ProductContext'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ProductProvider>
      <Header />
      {children}
      <Footer />
    </ProductProvider>
  )
}
