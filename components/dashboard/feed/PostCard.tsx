"use client"

import { Avatar, Button, Card, Chip, Dropdown, Label, Separator } from "@heroui/react";
import { Bookmark, Ellipsis, Heart, MessageCircle, Pencil, Share2, Trash, User2 } from "lucide-react";

interface PostCardProps {
  username: string;
  content: string;
  image?: string;
  hashtags?: string[];
  avatar: string;
  postedAt: string;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return "Justo ahora";
  } else if (diffInSeconds < 3600) {
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    return `${diffInMinutes}m`;
  } else if (diffInSeconds < 86400) {
    const diffInHours = Math.floor(diffInSeconds / 3600);
    return `${diffInHours}h`;
  } else if (diffInSeconds < 2592000) {
    const diffInDays = Math.floor(diffInSeconds / 86400);
    return `${diffInDays}d`;
  } else if (diffInSeconds < 31536000) {
    const diffInMonths = Math.floor(diffInSeconds / 2592000);
    return `${diffInMonths}mo`;
  } else {
    const diffInYears = Math.floor(diffInSeconds / 31536000);
    return `${diffInYears}y`;
  }
}

export default function PostCard({ content, image, avatar, username, postedAt, hashtags }: PostCardProps) {
  return (
    <Card className="w-full bg-white/60 p-4">
      <div className="flex gap-4">

        <div className="flex-shrink-0">
          <Avatar aria-label={username} size="md">
            <Avatar.Image
              alt={username}
              src={avatar}
            />
            <Avatar.Fallback className="text-xs"><User2 /></Avatar.Fallback>
          </Avatar>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-foreground/80 font-semibold">{username}</span>
              <span className="text-foreground/60 text-sm font-light">@{username} • {formatDate(postedAt)}</span>
            </div>
            <Dropdown>
              <Dropdown.Trigger>
                <Ellipsis className="size-4" />
              </Dropdown.Trigger>
              <Dropdown.Popover className="rounded-2xl bg-white/40 backdrop-blur-sm">
                <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
                  <Dropdown.Item id="profile" textValue="Profile" className="rounded-lg hover:bg-foreground/10">
                    <div className="flex w-full items-center justify-between gap-2">
                      <Label>Editar</Label>
                      <Pencil className="size-3.5 text-foreground/60" />
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item id="logout" textValue="Logout" variant="danger" className="rounded-lg hover:bg-foreground/10">
                    <div className="flex w-full items-center justify-between gap-2">
                      <Label>Eliminar</Label>
                      <Trash className="size-3.5 text-danger" />
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>
          </div>

          <p className="text-sm text-foreground/60 leading-relaxed">
            {content}
          </p>

          <div className="flex gap-2">
            {hashtags?.map((hashtag, index) => (
              <Chip.Root key={index} size="sm" className="text-foreground/60">
                #{hashtag.toLowerCase()}
              </Chip.Root>
            ))}
          </div>

          <Separator />

          <div className="mt-2">
            <img
              className="pointer-events-none w-full max-h-[300px] rounded-2xl object-cover select-none"
              src={image || "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/robot1.jpeg"}
              alt="Post content"
            />
          </div>

          <div className="flex justify-between items-center mt-2">
            <Button variant="ghost" size="sm"><Heart size={16} />127</Button>
            <Button variant="ghost" size="sm"><MessageCircle size={16} />45</Button>
            <Button variant="ghost" size="sm"><Share2 size={16} /></Button>
            <Button variant="ghost" size="sm"><Bookmark size={16} /></Button>
          </div>
        </div>
      </div>
    </Card>
  )
}
