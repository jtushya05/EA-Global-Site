"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";

interface VideoDialogProps {
  isOpen: boolean;
  videoUrl: string;
  onClose: () => void;
}

export default function VideoDialog({ isOpen, videoUrl, onClose }: VideoDialogProps) {
  // Extract video ID from YouTube URL
  const getYouTubeVideoId = (url: string | null) => {
    if (!url || typeof url !== 'string') {
      return null;
    }
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
    return match ? match[1] : null;
  };

  const videoId = getYouTubeVideoId(videoUrl);
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : '';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] p-0">
        <div className="aspect-video relative">
          {embedUrl && (
            <iframe
              src={embedUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
