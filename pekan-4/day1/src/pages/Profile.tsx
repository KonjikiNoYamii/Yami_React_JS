import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";

export default function Profile() {
  return (
    <div className="min-h-screen flex items-center justify-center text-red-600 p-6">
      <Card className="w-full max-w-md border border-red-700 bg-white text-red-700">
        <CardHeader className="border-b border-red-700 pb-4">
          <CardTitle className="text-2xl font-extrabold text-center uppercase">
            Profil Pengguna
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6 pt-6">
          {/* Alert */}
          <Alert className="border border-red-700 bg-black text-red-500">
            <AlertTitle className="font-bold">Selamat Datang</AlertTitle>
            <AlertDescription>Ubah profil Anda di bawah ini.</AlertDescription>
          </Alert>

          {/* Username */}
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-semibold">Username</label>
            <Input
              placeholder="Masukkan username"
              className="border-2 border-black text-black focus:ring-0 focus:border-red-700"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-semibold">Email</label>
            <Input
              placeholder="Masukkan email"
              type="email"
              className="border-2 border-black text-black focus:ring-0 focus:border-red-700"
            />
          </div>

          {/* Button */}
          <Button
            variant="outline"
            className="w-full mt-4 bg-black text-red-600 border-2 border-red-700 hover:bg-white hover:text-black transition-all"
          >
            Simpan Perubahan
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
