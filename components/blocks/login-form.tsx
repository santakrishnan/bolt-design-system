import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Welcome Back</CardTitle>
        <CardDescription>
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="you@example.com"
            required
            type="email"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" required type="password" />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="text-muted-foreground text-sm hover:text-primary"
            type="button"
          >
            Forgot password?
          </button>
        </div>
        <Button className="w-full">Sign In</Button>
        <div className="text-center text-muted-foreground text-sm">
          Don't have an account?{" "}
          <button className="text-primary hover:underline" type="button">
            Sign up
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
