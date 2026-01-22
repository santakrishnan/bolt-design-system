import { CommandExample } from "@/components/examples/command";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

import { Button } from "../ui/button";
import { DatePicker } from "./date-picker";
import { DrawerExample } from "./drawer";

export default function ComponentShowcase() {
  return (
    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {/* Column 1 */}
      <div className="flex flex-col gap-1">
        <div className="flex flex-col gap-1">
          <Button>Button</Button>

          <DrawerExample />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Dropdown Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Billing
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Alert>
          <AlertTitle>Info</AlertTitle>
          <AlertDescription>
            Your progress has been saved successfully.
          </AlertDescription>
        </Alert>

        <Alert variant="destructive">
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>
            Please review your settings before continuing.
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-medium text-sm">Active Now</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="font-bold text-2xl">+573</div>
            <p className="text-muted-foreground text-xs">
              +201 since last hour
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-medium text-sm">Subscriptions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="font-bold text-2xl">+2350</div>
            <p className="text-muted-foreground text-xs">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-medium text-sm">Status</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Badge>Active</Badge>
            <Badge variant="secondary">Premium</Badge>
            <Badge variant="outline">Verified</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Column 2 */}
      <div className="flex flex-col gap-1 lg:col-span-2">
        <Card>
          <CardContent className="flex flex-col gap-4 pt-6">
            <div className="flex flex-wrap items-center gap-4">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>

              <DatePicker className="w-[300px]" />
            </div>

            <div className="space-y-2">
              <Label>Progress</Label>
              <Progress value={75} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-medium text-sm">Menu</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs className="w-full" defaultValue="overview">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
              </TabsList>
              <TabsContent className="mt-4" value="overview">
                <p className="text-muted-foreground text-sm">
                  View your dashboard overview and key metrics.
                </p>
              </TabsContent>
              <TabsContent className="mt-4" value="analytics">
                <p className="text-muted-foreground text-sm">
                  Detailed analytics and performance data.
                </p>
              </TabsContent>
              <TabsContent className="mt-4" value="reports">
                <p className="text-muted-foreground text-sm">
                  Generate and download custom reports.
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-medium text-sm">Quick Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Revenue</span>
              <span className="font-bold">$12,345</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Users</span>
              <span className="font-bold">1,234</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Growth</span>
              <span className="font-bold text-green-600">+23%</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Column 3 */}
      <div className="flex w-full flex-col gap-1">
        <Input placeholder="Enter your name" />

        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Undo</MenubarItem>
              <MenubarItem>Redo</MenubarItem>
              <MenubarSeparator />
            </MenubarContent>
          </MenubarMenu>
        </Menubar>

        <div className="my-1">
          <CommandExample />
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-medium text-sm">
              Product Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="name">Name</Label>
                <Input
                  className="w-full"
                  defaultValue="Product Name"
                  id="name"
                  type="text"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  className="min-h-32"
                  defaultValue="Enter product description here..."
                  id="description"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-medium text-sm">Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-4">
              <Checkbox defaultChecked id="notifications" />
              <Label htmlFor="notifications">Enable notifications</Label>
            </div>
            <div className="flex items-center gap-4">
              <Checkbox id="marketing" />
              <Label htmlFor="marketing">Marketing emails</Label>
            </div>
            <div className="flex items-center gap-4">
              <Checkbox defaultChecked id="updates" />
              <Label htmlFor="updates">Product updates</Label>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex">
            <CardTitle className="font-medium text-sm">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="font-bold text-2xl">+2,350</div>
            <p className="text-muted-foreground text-xs">
              +180% from last month
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
