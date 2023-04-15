---
title: every developer should try tmux
date: 2023/04/15
description: tmux is a tool I use on a day-to-day basis that helps me to manage my command line operations.
tag: tmux, productivity
author: You
image: /images/ideas/tmux/tmux_1.png
---

import Image from 'next/image'

`tmux` is a tool I use on a day-to-day basis and I'm glad I came across it (thanks [Primeagen](https://www.youtube.com/@ThePrimeagen)). If you're unfamiliar with tmux, it is a tool that helps you to manage your command line operations.

<Image
  src="/images/ideas/tmux/tmux_1.png"
  alt="Photo"
  width={660}
  height={400}
  priority
  className="next-image"
/>
<small style={{ display: 'block', textAlign: 'center' }}>_Typical view of my tmux terminal_</small>

As you can see above, you can create **sessions, windows and panes** inside your terminal and the best part is, it works with the default terminal in your OS. No need to install iterm2 or any other terminal emulators out there. Goes without saying, you can also use it with iterm2, but you will find that the most used features are often overlapping, so might as well stick to one.

Now, this is not a tutorial post on how to use tmux. If you are interested in that, here's the [cheatsheet](https://tmuxcheatsheet.com/) and have fun.

---

## Pros

> A session is a **group of windows**, a window is a **group of panes** and a pane is a **single unit interface**

On top of being able to look like a hackerman trying to crack open a bank, you gain the ability to group your workspace much more efficiently.

### Sessions are saved

Also, you can create multiple sessions at once and each session is independent of the terminal's lifecycle! Hold up, what does this mean? Say if you accidentally close the terminal, the sessions you created are not lost! You can resume your session just by typing `tmux attach` or `tmux attach -t session_name`

Now, lets extend this further, say you are connected in an SSH session with a server, you can actually switch session to another workspace without losing the original connection! To me that is insane win for devops!

### Plugins & Scripting

Power users will often combine `tmux` with a text editor like `vim` to create a complete CLI-exclusive working environment, but I'm nowhere near that. Even so, the average user can still leverage from what tmux community has built.

You can automate your tmux bootup process to open up relevant work dirs, create the layout of windows, running scripts etc.

---

## Cons

All tools have its own cons, and here are some things that I am not a fan of with tmux:

### Internal clipboard

By default, tmux has an internal clipboard process that is separate from the system's. Here's what this means:

| **Operation**                      |                                   |
| ---------------------------------- | --------------------------------- |
| Copy from tmux; paste into tmux    | ✅ - with tmux copy-paste binding |
| Copy from tmux; paste into outside | ❌                                |
| Copy from outside; paste into tmux | ✅                                |

### Sessions are ephemeral (not persistently stored)

Wait, but you said earlier, the sessions are saved, what gives? Yes they are saved _in memory_, as long as the computer is alive. If you shut down your PC, you will lose all your sessions.

I have a dual-boot PC running Windows & Ubuntu, for gaming and work and this impacts me a lot. However, its not that bad, because you can script some of the common ops in tmux to quickly get up to speed.

---

## Config File

Here is the tmux config file I use.

```conf
set -g @uptime_d 0
set -g @uptime_dy 0
set -g @uptime_h 2
set -g @uptime_m 50
set -g @uptime_s 2
set -g @uptime_y 0
set -g activity-action other
set -g assume-paste-time 1
set -g base-index 1
set -g bell-action any
set -g default-command
set -g default-shell /bin/bash
set -g default-size 80x24
set -g destroy-unattached off
set -g detach-on-destroy on
set -g display-panes-active-colour #00afff
set -g display-panes-colour #00afff
set -g display-panes-time 800
set -g display-time 1000
set -g history-limit 5000
set -g key-table root
set -g lock-after-time 0
set -g lock-command "lock -np"
set -g message-command-style fg=#ffff00,bg=#080808,bright
set -g message-style fg=#080808,bg=#ffff00,bright
set -g mouse on
set -g prefix C-b
set -g prefix2 C-Space
set -g renumber-windows on
set -g repeat-time 600
set -g set-titles on
set -g set-titles-string "#h ❐ #S ● #I #W"
set -g silence-action other
set -g status on
set -g status-bg #080808
set -g status-fg #8a8a8a
set -g status-format[0] "#[align=left range=left #{status-left-style}]#{T;=/#{status-left-length}:status-left}#[norange default]#[list=on align=#{status-justify}]#[list=left-marker]<#[list=right-marker]>#[list=on]#{W:#[range=window|#{window_index} #{window-status-style}#{?#{&&:#{window_last_flag},#{!=:#{window-status-last-style},default}}, #{window-status-last-style},}#{?#{&&:#{window_bell_flag},#{!=:#{window-status-bell-style},default}}, #{window-status-bell-style},#{?#{&&:#{||:#{window_activity_flag},#{window_silence_flag}},#{!=:#{window-status-activity-style},default}}, #{window-status-activity-style},}}]#{T:window-status-format}#[norange default]#{?window_end_flag,,#{window-status-separator}},#[range=window|#{window_index} list=focus #{?#{!=:#{window-status-current-style},default},#{window-status-current-style},#{window-status-style}}#{?#{&&:#{window_last_flag},#{!=:#{window-status-last-style},default}}, #{window-status-last-style},}#{?#{&&:#{window_bell_flag},#{!=:#{window-status-bell-style},default}}, #{window-status-bell-style},#{?#{&&:#{||:#{window_activity_flag},#{window_silence_flag}},#{!=:#{window-status-activity-style},default}}, #{window-status-activity-style},}}]#{T:window-status-current-format}#[norange list=on default]#{?window_end_flag,,#{window-status-separator}}}#[nolist align=right range=right #{status-right-style}]#{T;=/#{status-right-length}:status-right}#[norange default]"
set -g status-format[1] "#[align=centre]#{P:#{?pane_active,#[reverse],}#{pane_index}[#{pane_width}x#{pane_height}]#[default] }"
set -g status-interval 10
set -g status-justify left
set -g status-keys emacs
set -g status-left "#[fg=#080808,bg=#ffff00,bold] ❐ #S #[fg=#ffff00,bg=#ff00af,none]#[fg=#e4e4e4,bg=#ff00af,none] ↑#{?@uptime_y, #{@uptime_y}y,}#{?@uptime_dy, #{@uptime_dy}d,}#{?@uptime_h, #{@uptime_h}h,}#{?@uptime_m, #{@uptime_m}m,} #[fg=#ff00af,bg=#080808,none] "
set -g status-left-length 1000
set -g status-left-style fg=#8a8a8a,bg=#080808
set -g status-position bottom
set -g status-right "#(echo; while [ x\"$(tmux -S '#{socket_path}' display -p '#{l:#{pid}}')\" = x\"#{pid}\" ]; do nice cut -c3- ~/.tmux.conf | sh -s _uptime; sleep 60; done)#[fg=#080808,bg=#080808,none]#[fg=#8a8a8a,bg=#080808,none] #[fg=none]#[bg=none]#[none]#{?client_prefix,⌨ ,  }#[fg=none]#[bg=none]#[none]#{?mouse,↗ ,  }#[fg=none]#[bg=none]#[none]#{?session_many_attached,⚇ ,}#[fg=none]#[bg=none]#[none]#{?pane_synchronized,⚏ ,}#{?battery_status, #{battery_status},}#{?battery_bar, #{battery_bar},}#{?battery_percentage, #{battery_percentage},} #[fg=#8a8a8a,bg=#080808,none]| %R #[fg=#8a8a8a,bg=#080808,none]| %d %b #[fg=#d70000,bg=#080808,none]#[fg=#e4e4e4,bg=#d70000,none] #(cut -c3- ~/.tmux.conf | sh -s _username #{pane_pid} #{b:pane_tty} false #D)#[fg=none]#[bg=none]#[bold,blink]#{?#{==:#(cut -c3- ~/.tmux.conf | sh -s _username #{pane_pid} #{b:pane_tty} #D),root},!,}#[default]#[fg=#e4e4e4,bg=#d70000,none] #[fg=#e4e4e4,bg=#d70000,none]#[fg=#080808,bg=#e4e4e4,bold] #(cut -c3- ~/.tmux.conf | sh -s _hostname #{pane_pid} #{b:pane_tty} false false #h #D) "
set -g status-right-length 1000
set -g status-right-style fg=#8a8a8a,bg=#080808
set -g status-style fg=#8a8a8a,bg=#080808
set -g update-environment[0] DISPLAY
set -g update-environment[1] KRB5CCNAME
set -g update-environment[2] SSH_ASKPASS
set -g update-environment[3] SSH_AUTH_SOCK
set -g update-environment[4] SSH_AGENT_PID
set -g update-environment[5] SSH_CONNECTION
set -g update-environment[6] WINDOWID
set -g update-environment[7] XAUTHORITY
set -g visual-activity off
set -g visual-bell off
set -g visual-silence off
set -g word-separators " "
```

<small style={{ display: 'block', textAlign: 'center' }}>_Path: ~/.tmux.conf_</small>

Apart from the styling changes, I have also modified the activation key-binding from ~~Ctrl-b~~ to **Ctrl-Space**. Below are the rest:

| **Operation**            | **Key-binding** (Ignore +) | **Alternative**             |
| ------------------------ | -------------------------- | --------------------------- |
| [Pane] Horizontal split  | Ctrl-Space + -             |
| [Pane] Vertical split    | Ctrl-Space + \|            |
| [Pane] Exit pane         | Ctrl-Space + x             | type `exit` and Enter       |
| [Window] New window      | Ctrl-Space + c             |
| [Window] Exit window     | Ctrl-Space + &             |
| [Window] Rename window   | Ctrl-Space + ,             |
| [Window] Switch window   | Ctrl-Space + 1...9         |
| [Session] Detach session | Ctrl-Space + d             |
| [Session] Attach session | tmux attach                | tmux attach -t session_name |
| [Session] Rename session | Ctrl-Space + $             |

The rest you can find in the [cheatsheet](https://tmuxcheatsheet.com/).

## Conclusion

`tmux` is an awesome tool that I think is often overlooked by developers nowadays, despite being around longer. Hope this convinces you to at least give it a try. Either way, thanks for reading!
