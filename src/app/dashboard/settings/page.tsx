import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

const SettingsForm = () => {
    return (
        <div className="absolute top-20 left-20 w-[calc(100%-80px)] p-4">
            <div className="grid grid-cols-2 gap-2">
                <div className="border-2 shadow-md rounded-md">
                    <div className="flex-1 p-4">
                        <h1 className="text-2xl font-bold mb-4">Settings</h1>
                        <form className="space-y-4">
                            <div className="flex justify-center items-center flex-col gap-2">
                                <div className="w-[140px] h-[140px] border rounded-full shadow-lg">
                                    <Input
                                        className="hidden"
                                        type="file"
                                        id="avatar"
                                    />
                                </div>
                                <Label htmlFor="avatar inline-block text-2xl font-bold">
                                    Your Avatar
                                </Label>
                            </div>
                            <div>
                                <Label htmlFor="username">Username</Label>
                                <Input
                                    id="username"
                                    placeholder="Enter your username"
                                />
                            </div>
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password"
                                />
                            </div>
                            <div>
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    className="resize-none"
                                    id="description"
                                    placeholder="Enter your description"
                                ></Textarea>
                            </div>
                            <div className="flex justify-start items-center gap-4">
                                <Label htmlFor="notifications">
                                    Enable Notifications
                                </Label>
                                <Switch id="notifications" />
                            </div>
                            <Button type="submit" className="mt-4">
                                Save Changes
                            </Button>
                        </form>
                    </div>
                </div>
                <div className="border-2 shadow-md rounded-md"></div>
            </div>
        </div>
    );
};

export default SettingsForm;
