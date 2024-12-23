import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"


export default function SupportPage() {
  return (
    <div className="min-h-screen bg-[#010b1a] text-white p-8 relative overflow-hidden">
      {/* Design elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-4 right-4 w-12 h-12 border-4 border-blue-500 rotate-45"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Say hello, on our support</h1>
        <p className="text-lg text-center mb-12 text-gray-400">
          Business is the activity of making one living or making money by producing or buying and selling products.
          <br />
          Simply put it is any activity or enterprise entered into for profit.
        </p>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input type="text" placeholder="First Name" className="bg-[#323456] border-none" />
            <Input type="text" placeholder="Last Name" className="bg-[#323456] border-none" />
          </div>
          <Input type="email" placeholder="Email Address" className="bg-[#323456] border-none" />
          <Input type="text" placeholder="Subject" className="bg-[#323456] border-none" />
          <Textarea placeholder="Your Message" className="bg-[#323456] border-none h-32" />
          <Button className="w-full md:w-auto bg-[#3b5de7] hover:bg-[#2e4cc5]">SUBMIT FORM</Button>
        </form>
      </div>      
    </div>
  )
}